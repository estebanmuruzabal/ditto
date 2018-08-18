import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import { required, email } from 'utils/validators';
import Input from 'components/input/Input';

const LOGIN_FORM = 'LoginForm';

const LoginForm = reduxForm({
  form: LOGIN_FORM,
})((props) => {
  return (
    <form>
      <div className="login-form-container">
        <Field
          name="username"
          type="email"
          component={Input}
          placeholder="Enter Email"
          validate={[required, email]}
        />

        <Field
          type="password"
          name="password"
          component={Input}
          placeholder="Enter Password"
          validate={[required]}
        />

        <button
          type="submit"
          className="primary-btn"
          disabled={props.loggingIn}
          onClick={(e) => (
            props.handleSubmit(e)
          )}
        >
          LOGIN { props.loggingIn && <LoadingSpinner /> }
        </button>
      </div>
    </form>
  );
});

export default LoginForm;