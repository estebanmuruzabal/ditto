import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
// import us from 'react-phone-input-2/lang/es.json'
import ar from 'react-phone-input-2/lang/es.json'
import { Input } from 'components/forms/input';

import {
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  LinkButton,
  SubrequirementContainer,
  Dot,
  Requirement
} from './authentication-form.style';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { SIGNUP_MUTATION } from 'graphql/mutation/signup';
import PhoneInput from 'react-phone-input-2'
import { currentLng } from 'utils/constant';

export default function SignOutModal() {
  const intl = useIntl();
  const { authState, authDispatch } = useContext<any>(AuthContext);
  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  const toggleOtpForm = () => {
    authDispatch({
      type: 'OTP_VERIFICATION',
    });
  };

  //signup
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [
    signupMeMutation,
    { 
      loading,
      error
    }
  ] = useMutation(SIGNUP_MUTATION,{
    onCompleted: (data) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('phone_number', `${phone}`);
        toggleOtpForm();
      }
      setErrorMessage(null)
    },
    onError: (error) => {
      setPassword('');
      setRepeatPassword('');
      if (error?.toString() && error?.toString().includes('User already registered')) setErrorMessage(intl.formatMessage({ id: 'userAlreadyRegistered', defaultMessage: 'User already registered' }))
      else if (error?.toString() && error?.toString().includes('Incorrect length')) setErrorMessage(intl.formatMessage({ id: 'atLeast6Char', defaultMessage: 'Mínimo 6 caracteres' }))
      else setErrorMessage(error?.toString())
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value)
  }

  const hasMinLength = () => {
    return password.length >= 6;
  }
  const passwordsAreEqual = () => {
    return password === repeatPassword;
  }

  // private hasSecurity() {
  //   let securityChecks = 0;
  //   // @ts-ignore
  //   securityChecks += this.hasLowerCase() + this.hasUpperCase() + this.hasDigit() + this.hasSpecialChar();
  //   return securityChecks >= 3;
  // }

  // private hasLowerCase() {
  //   return !!this.state.password.match(new RegExp('[a-z]'));
  // }

  // private hasUpperCase() {
  //   return !!this.state.password.match(new RegExp('[A-Z]'));
  // }

  // private hasDigit() {
  //   return !!this.state.password.match(new RegExp('[0-9]'));
  // }

  // private hasSpecialChar() {
  //   return !!this.state.password.match(/[\~\`\!\@\#\$\%\^\&\*\(\)\+\=\_\-\{\}\[\]\\|\:\;\"\'\?\/\<\>\,\.]/);
  // }

  const upperCaseEverything = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  const setErrorFor5Sec = (messageId) => {
    const error = intl.formatMessage({ id: messageId, defaultMessage: 'Please check the form' })
      setErrorMessage(error)
      setTimeout(() => setErrorMessage(null), 1500)
      return null;
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage=''
          />
        </SubHeading>
          <form method="post" onSubmit={
            async (e) => {
                e.preventDefault();
                // if (!passwordsAreEqual()) { setErrorFor5Sec('passShouldBeEqual');return; }
                
                await signupMeMutation({
                  variables: {phone, password, name}
                });
              }
            }
          >
            <Input
              type="text"
              name="name"
              width='100%'
              value={upperCaseEverything(name)}
              onChange={(e) => setName(upperCaseEverything(e.target.value))}
              placeholder={intl.formatMessage({
                id: 'namePlaceholder',
                defaultMessage: 'Complete name',
              })}
              oninvalid="this.setCustomValidity('Please Enter valid email')"
              oninput="setCustomValidity('')"
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
              required
          />
           <Input
              type='email'
              name='email'
              width='100%'
              placeholder={intl.formatMessage({ id: 'emailSignUpPlaceholder', defaultMessage: 'Email address' })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              backgroundColor='#F7F7F7'
              marginBottom='10px'
              required
              // intlInputLabelId="profileEmailField"
            />
           {/* <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'namePlaceholder',
                defaultMessage: 'Dirección de correo',
              })}
              oninvalid="this.setCustomValidity('Please Enter valid email')"
              oninput="setCustomValidity('')"
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
              required
            /> */}
            <PhoneInput
              inputProps={{
                name: 'Numero de telefono',
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
            <Input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'passwordPlaceholderRegister',
                defaultMessage: 'Password (min 6 characters)',
              })}
              height='48px'
              width='100%'
              backgroundColor='#F7F7F7'
              mb='10px'
              required
            />
            {/* <Input
              type="text"
              name="password"
              width='100%'
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'passwordRepeatPlaceholder',
                defaultMessage: 'Password (min 6 characters)',
              })}
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
              required
            /> */}
             {!hasMinLength && (
              <SubrequirementContainer>
                <Dot />
                <Requirement>{intl.formatMessage({ id: 'atLeast6Char', defaultMessage: 'At least 6 characters' })}</Requirement>
              </SubrequirementContainer>
            )}

             {!passwordsAreEqual && (
              <SubrequirementContainer>
                <Dot />
                <Requirement>{intl.formatMessage({ id: 'passShouldBeEqual', defaultMessage: 'Passwords does not match' })}</Requirement>
              </SubrequirementContainer>
            )}
            {/*
            {!this.hasSecurity() && (
              <div>
                <SubrequirementContainer>
                  <Dot />
                  <Requirement>{lang.t('CHANGE_PASSWORD.AT_LEAST_CATEGORIES')}</Requirement>
                </SubrequirementContainer>
                {!this.hasLowerCase() && (
                  <SubrequirementContainer>
                    <Dot />
                    <Requirement>{lang.t('CHANGE_PASSWORD.LOWERCASE_LETTER')}</Requirement>
                  </SubrequirementContainer>
                )}
                {!this.hasUpperCase() && (
                  <SubrequirementContainer>
                    <Dot />
                    <Requirement>{lang.t('CHANGE_PASSWORD.UPPERCASE_LETTR')}</Requirement>
                  </SubrequirementContainer>
                )}
                {!this.hasDigit() && (
                  <SubrequirementContainer>
                    <Dot />
                    <Requirement>{lang.t('CHANGE_PASSWORD.DIGIT')}</Requirement>
                  </SubrequirementContainer>
                )}
                {!this.hasSpecialChar() && (
                  <SubrequirementContainer>
                    <Dot />
                    <Requirement>{lang.t('CHANGE_PASSWORD.SPECIAL_CHAR')}</Requirement>
                  </SubrequirementContainer>
                )}
                </div>
              )} */}
            <HelperText style={{ padding: '20px 0 30px' }}>
              <FormattedMessage
                id='tramsText'
                defaultMessage="By signing up, you agree to Ditto's"
              />
              &nbsp;
              <Link href='/terms'>
                <a>
                  <FormattedMessage
                    id='termsConditionText'
                    defaultMessage='Terms &amp; Conditions'
                  />
                </a>
              </Link>
            </HelperText>
            <Button variant='primary' size='big' width='100%' type='submit'>
              {loading ? <FormattedMessage id='loadingBtn' defaultMessage='Continue' /> : <FormattedMessage id='registerBtn' defaultMessage='Continue' /> }
            </Button>
          </form>
          {/* {loading && <p style={{
            marginTop: "15px"
          }}>{intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })}</p>} */}
          {(error || errorMessage) && <p style={{
            marginTop: "15px",
            color: "red"
          }}>{errorMessage}</p>}
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
