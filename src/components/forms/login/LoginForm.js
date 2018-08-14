import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import { required, email } from 'utils/validators';
import Input from 'components/input/Input';
import "./LoginForm.css";

const LOGIN_FORM = 'LoginForm';

const LoginForm = reduxForm({
  form: LOGIN_FORM,
})((props) => {
  return (
    <form>
      <div className="form-container">
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

        <Button
          type="submit"
          className="login-button"
          bsStyle="primary"
          disabled={props.loggingIn}
          onClick={(e) => (
            props.handleSubmit(e)
          )}
        >
          LOGIN { props.loggingIn && <LoadingSpinner /> }
        </Button>
      </div>
    </form>
  );
});

export default LoginForm;