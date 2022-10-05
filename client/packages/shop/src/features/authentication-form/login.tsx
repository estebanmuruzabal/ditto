import React, { useContext } from 'react';
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  // Input,
  Divider,
} from './authentication-form.style';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import { Input } from 'components/forms/input';
import { SIGNIN_MUTATION } from 'graphql/mutation/signin';
import Router, { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2'
import startsWith from 'lodash.startswith';
import es from 'react-phone-input-2/lang/es.json'

export default function SignInModal() {
  const router = useRouter();
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
  };

  const togglePhoneVerificationForm = () => {
    authDispatch({
      type: 'PHONE_VERIFICATION',
    });
  };

  const [
    signinMeMutation,
    { 
      loading,
      error,
      data
    }
  ] = useMutation(SIGNIN_MUTATION,{
    onCompleted: (data) => {
      const { access_token, user } = data.login;
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', `${access_token}`);
        authDispatch({ 
          type: 'SIGNIN_SUCCESS',
          user
        });
        closeModal();
        Router.push('/[type]', router.asPath);
      }
    },
    onError: (error) => {
      setPhone('54');
      setPassword('');
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value)
  }
  const authError = error?.toString()?.includes("User dose not exits.") || error?.toString()?.includes("Password dose not match");
  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your phone number &amp; password'
          />
        </SubHeading>
        <form onSubmit={
            async (e) => {
                e.preventDefault();
                await signinMeMutation({
                  variables: {phone, password}
                });
              }
          }
        >
          <PhoneInput
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false
              }}
              containerStyle={{textAlign: "left"}}
              inputStyle={{backgroundColor: "#F7F7F7", height: "48px", marginBottom: "10px", width: "100%"}}
              onlyCountries={['ar']}
              localization={es}
              country={'ar'}
              masks={{ar: '(...) ...-....'}}
              value={phone}
              onChange={handlePhoneChange}
          />

          <Input
            type='password'
            placeholder={intl.formatMessage({
              id: 'passwordPlaceholder',
              defaultMessage: 'Password (min 6 characters)',
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />

          <Button
            variant='primary'
            size='big'
            style={{ width: '100%' }}
            type='submit'
          >
            <FormattedMessage id='continueBtn' defaultMessage='Continue' />
          </Button>
        </form>
        
        {loading && <p style={{
          marginTop: "15px"
        }}>Cargando...</p>}
        
        {authError && <p style={{
          marginTop: "15px", fontSize: '16px'
        }}> {intl.formatMessage({ id: 'userNotFound', defaultMessage: 'Invalid user/password' })}</p>}
        
        {error && !authError &&<p style={{
          marginTop: "15px", fontSize: '16px'
        }}> {`${error?.message || error}. Please try again`}</p>}
      
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='phoneVerifyText'
            defaultMessage='Phone number not verified?'
          />{' '}
          <LinkButton onClick={togglePhoneVerificationForm}>
            <FormattedMessage id='verifyNowText' defaultMessage='Verify Now' />
          </LinkButton>
        </Offer>
      </OfferSection>

      {/*<OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>*/}
    </Wrapper>
  );
}
