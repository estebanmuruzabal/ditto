import React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import ReactPhoneInput from 'react-phone-input-2';

import ErrorInput from 'components/common/input/ErrorInput';
import { required, email, password, validPassword, phoneNumber } from 'helpers/validators';
import LoadingSpinner from 'components/common/loading/LoadingSpinner';
import Input from 'components/common/input/Input';

const confirmPassword = password('password');
const SIGNUP_FORM = 'SignupForm';

const preferredCountriesOptions = ['us', 'ca'];

const phoneInputStyle = {
  height: '45px',
  width: '285px',
  color: '#333333',
  fontSize: '14px',
  borderColor: '#979797',
};

const phoneContainerStyle = {
  marginBottom: '17px',
};

const SignupForm = reduxForm({
  form: SIGNUP_FORM,
})((props) => {
  return (
    <form onSubmit={props.handleSubmit} className="signup-form">
      <div className="create-account-title">CREATE NEW ACCOUNT</div>
      { props.subTitleText &&
        <p className="form-title">{props.subTitleText}</p>
      }

      <Field
        name="email"
        type="email"
        component={Input}
        placeholder="Enter Email"
        validate={[required, email]}
      />

      <div className="tooltips-container">
        <Field
          type="password"
          name="password"
          component={Input}
          placeholder="Password"
          validate={[required, validPassword]}
        />
        <div className="tooltip">?
          <span className="tooltip-text">
          Please makes sure your password has:<br />
          - At least 1 lower case letter<br />
          - At least 1 upper case letter<br />
          - At least 1 number<br />
          - At least 8 characters<br />
          - Password should have upper and lower case letters and numbers.
          </span>
        </div>
      </div>

      <Field
        type="password"
        name="passwordConfirm"
        component={Input}
        placeholder="Confirm Password"
        validate={[required, confirmPassword, validPassword]}
      />

      <Field
        name="firstName"
        type="text"
        component={Input}
        placeholder="First Name"
        validate={[required]}
      />

      <Field
        name="lastName"
        type="text"
        component={Input}
        placeholder="Last Name"
        validate={[required]}
      />

      <ReactPhoneInput
        defaultCountry="us"
        inputStyle={phoneInputStyle}
        containerStyle={phoneContainerStyle}
        placeholder="1 201-555-8684"
        value={props.userPhone}
        onChange={(e) => props.phoneHandler(e, 'userPhone')}
        preferredCountries={preferredCountriesOptions}
        disableAreaCodes
      />
      { ((phoneNumber(props.userPhone) && props.formSubmitted) || (phoneNumber(props.userPhone) && props.userPhone.length === 17)) &&
        <ErrorInput errorMessage={phoneNumber(props.userPhone)} />
      }

      <div className="tooltips-container">
        <Field
          name="emergencyContactName"
          type="text"
          component={Input}
          placeholder="Emergency Contact Name"
          validate={[required]}
        />
        <div className="tooltip">?
          <span className="tooltip-text">Contact in case of emergency only</span>
        </div>
      </div>

      <ReactPhoneInput
        defaultCountry="us"
        inputStyle={phoneInputStyle}
        containerStyle={phoneContainerStyle}
        placeholder="1 201-555-8684"
        value={props.emergencyContactPhone}
        onChange={(e) => props.phoneHandler(e, 'emergencyContactPhone')}
        preferredCountries={preferredCountriesOptions}
        disableAreaCodes
      />
      { ((phoneNumber(props.emergencyContactPhone) && props.formSubmitted) || (phoneNumber(props.emergencyContactPhone) && props.emergencyContactPhone.length === 17)) &&
        <ErrorInput errorMessage={phoneNumber(props.emergencyContactPhone)} />
      }

      <p className="terms-and-conditions-title">The fine print. Please review our terms and conditions</p>

      <div
        className="terms-and-conditions"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{__html: props.agreementHtmlResponse}}
      />

      <Button type="submit" className="signin-text" bsStyle="primary">
        FINISH UP &nbsp; { props.signingUpAccount && <LoadingSpinner /> }
      </Button>
      { props.errorMessage &&
        <ErrorInput errorMessage={props.errorMessage} />
      }
    </form>
  );
});

export default SignupForm;
