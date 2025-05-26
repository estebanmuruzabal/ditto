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
// import us from 'react-phone-input-2/lang/es.json'
import ar from 'react-phone-input-2/lang/es.json'
import { currentLng } from 'utils/constant';

export default function SignInModal() {
  const router = useRouter();
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('123456');
  const [errorMessage, setErrorMessage] = React.useState(null);

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
        if (router.asPath === '/checkout') {
          Router.push({ pathname: '/checkout', query: { shouldRefresh: true } })
        } else {
          Router.push({ pathname: '/home' })
        }
      }
    },
    onError: (error) => {
      setPhone('');
      setPassword('');
      if (error?.toString() && error?.toString().includes('User does not exits')) setErrorMessage(intl.formatMessage({ id: 'userNotFound', defaultMessage: 'Usuario inexistente' }))
      else if (error?.toString() && error?.toString().includes('Incorrect length')) setErrorMessage(intl.formatMessage({ id: 'atLeast6Char', defaultMessage: 'Mínimo 6 caracteres' }))
      else if (error?.toString() && error?.toString().includes('Anteponer el número 54')) setErrorMessage(intl.formatMessage({ id: 'a', defaultMessage: 'Anteponer el número 54' }))
      else if (error?.toString() && error?.toString().includes('Todos los campos son requeridos')) setErrorMessage(intl.formatMessage({ id: 'a', defaultMessage: 'Todos los campos son requeridos' }))
      else setErrorMessage(error?.toString())
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value)
  }

    // {authError && <p style={{
    //   marginTop: "15px", fontSize: '16px'
    // }}> {intl.formatMessage({ id: 'userNotFound', defaultMessage: 'Invalid user/password' })}</p>}
    
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
              onlyCountries={[currentLng]}
              localization={ar}
              country={currentLng}
              masks={{ar: '(...) ...-....'}}
              value={phone}
              onChange={handlePhoneChange}
          />

          {/* <Input
            type='password'
            placeholder={intl.formatMessage({
              id: 'passwordPlaceholder',
              defaultMessage: 'Password',
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            width='100%'
            mb='10px'
          /> */}

          <Button
            variant='primary'
            size='big'
            disable={loading}
            style={{ width: '100%' }}
            type='submit'
          >
            { !loading ? (
              <FormattedMessage id='continueBtn' defaultMessage='Continue' />
            ) : (
              <FormattedMessage id='loading' defaultMessage='Cargando...' />
            )}
          </Button>
        </form>
        
        {errorMessage &&<p style={{
          marginTop: "15px", fontSize: '16px'
        }}> {errorMessage}</p>}
      
        <Offer style={{ padding: '20px 0', fontSize: '20px' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have an account?"
          />
           <Button
            variant='primary'
            size='big'
            disable={loading}
            style={{ width: '100%' }}
            type='button'
            onClick={toggleSignUpForm}
          >
              <FormattedMessage id='signUpBtnText' defaultMessage='signUpBtnText' />
          </Button>
          {/* <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton> */}
        </Offer>
      </Container>
  
  {/*   <OfferSection>
        <Offer>
          <FormattedMessage
            id='phoneVerifyText'
            defaultMessage='Phone number not verified?'
          />{' '}
          <LinkButton onClick={togglePhoneVerificationForm}>
            <FormattedMessage id='verifyNowText' defaultMessage='Verify Now' />
          </LinkButton>
        </Offer>
      </OfferSection> */}

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
