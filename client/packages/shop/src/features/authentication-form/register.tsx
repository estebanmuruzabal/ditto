import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import es from 'react-phone-input-2/lang/es.json'
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
import startsWith from 'lodash.startswith';

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
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [
    signupMeMutation,
    { 
      loading,
      error
    }
  ] = useMutation(SIGNUP_MUTATION,{
    onCompleted: (data) => {
      console.log('data', data)
      if (typeof window !== 'undefined') {
        localStorage.setItem('phone_number', `${phone}`);
        toggleOtpForm();
      }
      setErrorMessage(null)
    },
    onError: (error) => {
      setPhone('');
      setPassword('');
      console.log(error);
      if (error?.toString() && error?.toString().includes('User already registered')) setErrorMessage(intl.formatMessage({ id: 'userAlreadyRegistered', defaultMessage: 'User already registered' }))
      else if (error?.toString() && error?.toString().includes('Incorrect length')) setErrorMessage(intl.formatMessage({ id: 'atLeast6Char', defaultMessage: 'Mínimo 6 caracteres' }))
      else setErrorMessage(intl.formatMessage({ id: 'somethingWentWrong' }))
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value)
  }

  const hasMinLength = () => {
    return password.length >= 6;
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



  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          {/* <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          /> */}
        </SubHeading>
          <form method="post" onSubmit={
            async (e) => {
                e.preventDefault();
                await signupMeMutation({
                  variables: {phone, password}
                });
              }
            }
          >
            <PhoneInput
              inputProps={{
                name: 'Numero de telefono',
                required: true,
                autoFocus: true
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
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'passwordPlaceholder',
                defaultMessage: 'Password (min 6 characters)',
              })}
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
              required
            />
             {!hasMinLength && (
              <SubrequirementContainer>
                <Dot />
                <Requirement>{intl.formatMessage({ id: 'atLeast6Char', defaultMessage: 'At least 6 characters' })}</Requirement>
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
              <Link href='/'>
                <a>
                  <FormattedMessage
                    id='termsConditionText'
                    defaultMessage='Terms &amp; Condition'
                  />
                </a>
              </Link>
            </HelperText>
            <Button variant='primary' size='big' width='100%' type='submit'>
              <FormattedMessage id='registerBtn' defaultMessage='Continue' />
            </Button>
          </form>
          {loading && <p style={{
            marginTop: "15px"
          }}>Loading...</p>}
          {error && <p style={{
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
