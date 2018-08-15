import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConfirmWhateverModal from 'components/Modal/ConfirmWhateverModal';
// import PropTypes from 'prop-types';
import SignupForm from 'components/forms/signup/SignupForm';
import { phoneNumber } from 'utils/validators';
import { login } from "actions/auth.actions";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmSignupModalToggle: false,
      openFailureModalToggle: false,
      errorMessage: undefined,
      userPhone: '',
      emergencyContactPhone: '',
      agreementHtmlResponse: null,
      formSubmitted: false,
    };
  }

  componentWillReceiveProps(nextProps) {
  }

  toggleFailureModalToggle = () => {
    this.setState(prevState => ({
      openFailureModalToggle: !prevState.openFailureModalToggle,
    }));
  }

  phoneHandler = (value, phone) => {
    this.setState({ [phone]: value });
  }

  handleRegisterClick = user => {
    if (phoneNumber(this.state.userPhone) === null && phoneNumber(this.state.emergencyContactPhone) === null) {
      const userPhoneFormatted = this.state.userPhone.replace('(', '').replace(')', '').replace('-', '').replace(/\s/g, '');
      const emergencyContactPhone = this.state.emergencyContactPhone.replace(')', '').replace('(', '').replace('-', '').replace(/\s/g, '');
      const formattedRequest = {
        email: user.email,
        password: user.password,
        phone_number: userPhoneFormatted,
        name: user.firstName,
        last_name: user.lastName,
        emergency_contact_name: user.emergencyContactName,
        emergency_contact_phone: emergencyContactPhone,
      };
      this.props.dispatch(login(formattedRequest));
    } else {
      this.setState({ formSubmitted: true });
    }
  }

  render() {
    return (
      <div className="signup-page-container">
        <div className="rider-login-container">
          <div className="organizer-title">Organizer Registration</div>
          <div className="rider-title">ALREADY A RIDER?</div>
          <Link to={`/login/${this.props.match.params.hashId}`}>
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
          emergencyContactPhone={this.state.emergencyContactPhone}
          agreementHtmlResponse={this.state.agreementHtmlResponse}
        />
        { this.state.confirmSignupModalToggle &&
          <ConfirmWhateverModal
            handleConfirmClick={this.dispatchLogin}
            confirmButtonText="ACCEPT"
            title="Confirmation"
            showCancel={false}
            subtitle="User activated successfully"
          />
          }
        { this.state.openFailureModalToggle &&
          <ConfirmWhateverModal
            handleConfirmClick={this.toggleFailureModalToggle}
            showCancel={false}
            title="Oops"
            confirmButtonText="ACCEPT"
            subtitle={this.state.errorMessage ? `Something went wrong: ${this.state.errorMessage}` : 'Something went wrong, please try again later.'}
          />
        }
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
