import React, { useContext } from 'react';
import {
  Button,
  Wrapper,
  Heading,
  SubHeading,
} from './authentication-form.style';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import { Input } from 'components/forms/input';
import { PHONE_VERIFICATION_CHECK_MUTATION } from 'graphql/mutation/signup';
import Router, { useRouter } from 'next/router';
import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 60px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export default function OtpModal() {
  const router = useRouter();
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [otp, setOtp] = React.useState('');

  const [
    signinMeMutation,
    { 
      loading,
      error,
      data
    }
  ] = useMutation(PHONE_VERIFICATION_CHECK_MUTATION,{
    onCompleted: (data) => {
      const { access_token, user } = data.phoneVerificationCheck;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('phone_number');

        localStorage.setItem('access_token', `${access_token}`);
        authDispatch({
          type: 'SIGNIN_SUCCESS',
          user
        });
        closeModal();
        // Router.push('/[type]', router.asPath);
        // currently sending to profile instead of really checking otp
        // Router.push('/checkout', router.asPath);
        if (router.asPath === '/checkout') {
          Router.push({ pathname: '/checkout', query: { shouldRefresh: true } })
        } else {
          Router.push({ pathname: '/home' })
        }
      }
    },
    onError: (error) => {
      setOtp('');
    }
  });

  const submitForm = async (e) => {
    e.preventDefault();
    await signinMeMutation({
      variables: {verification_code: otp, phone: localStorage.getItem('phone_number')}
    });
  }
  
  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='otpForm' defaultMessage='Verify Phone Number' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='otpSubText'
            defaultMessage='Next time login with your phone number and password.'
          />
        </SubHeading>
        <form onSubmit={submitForm}
        >
          {/* <Input
            type='text'
            placeholder={intl.formatMessage({
              id: 'verificationCodePlaceholder',
              defaultMessage: 'Verification Code',
            })}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          /> */}
          <Button
            variant='primary'
            size='big'
            style={{ width: '100%' }}
            type='submit'
          >
            { loading ? <FormattedMessage
          id='loadingBtn'
          defaultMessage='loadingBtn'
        /> : <FormattedMessage
        id='continueBtn'
        defaultMessage='continueBtn'
      />
            }
            </Button>
        </form>
        {error && <p style={{
          marginTop: "15px",
          color: "red"
        }}> {error.message}</p>}

      </Container>
    </Wrapper>
  );
}
