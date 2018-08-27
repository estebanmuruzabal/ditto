import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import SignupForm from 'components/forms/signup/SignupForm';
import { phoneNumber } from 'utils/validators';
import { signup, clearSignupResponsesAction } from "actions/account.actions";
import { setMessageAction } from  'actions/messages.actions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      userPhone: '',
      formSubmitted: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signupSuccess) {
      this.props.dispatch(clearSignupResponsesAction());
      this.props.dispatch(setMessageAction({
        redirectTo: '/login',
        title: 'Confirmation',
        confirmButtonText: 'ACCEPT',
        subtitle: 'An email was sent to confirm you email account. Please proceed to confirm it to login!',
      }));
    } else if (nextProps.signupError) {
      this.props.dispatch(clearSignupResponsesAction());
      this.props.dispatch(setMessageAction({
        showCancel: false,
        title: 'Failure',
        confirmButtonText: 'ACCEPT',
        subtitle: 'There was an error doing your signup. Please try again later',
      }));
    }
  }

  phoneHandler = (value, phone) => {
    this.setState({ [phone]: value });
  }

  handleRegisterClick = user => {
    if (phoneNumber(this.state.userPhone) === null) {
      const userPhoneFormatted = this.state.userPhone.replace('(', '').replace(')', '').replace('-', '').replace(/\s/g, '');
      const formattedRequest = {
        email: user.email,
        password: user.password,
        phone_number: userPhoneFormatted,
        complete_name: user.firstName + user.lastName,
        first_name: user.firstName,
        last_name: user.lastName,
      };
      this.props.dispatch(signup(formattedRequest));
    } else {
      this.setState({ formSubmitted: true });
    }
  }

  render() {
    return (
      <div className="signup-page-container">
        <div className="rider-login-container">
          <div className="organizer-title">User Registration</div>
          <div className="rider-title">ALREADY A USER?</div>
          <Link to={'/login'}>
            <Button className="signin-text" bsStyle="primary">
              SIGN IN TO YOUR ACCOUNT
            </Button>
          </Link>
        </div>

        <div className="divider" />

        <SignupForm
          onSubmit={this.handleRegisterClick}
          signingUpAccount={this.props.loading}
          phoneHandler={this.phoneHandler}
          userPhone={this.state.userPhone}
          errorMessage={this.state.errorMessage}
          formSubmitted={this.state.formSubmitted}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

// SignupPage.propTypes = {
  
// };

// SignupPage.defaultProps = {
//   loading: false,
//   errorMessage: {},
//   agreementHtmlResponse: null,
//   email: '',
//   pass: '',
// };

export default connect(mapStateToProps)(SignupPage);
