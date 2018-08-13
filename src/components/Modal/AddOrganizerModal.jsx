import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { required, email, phoneNumber } from 'helpers/validators';
import { createNewPendingOrganizerAction, clearErrorMessagesAction } from 'actions/user.actions';
import LoadingSpinner from 'components/common/loading/LoadingSpinner';
import Input from 'components/common/input/Input';
import ReactPhoneInput from 'react-phone-input-2';
import ErrorInput from 'components/common/input/ErrorInput';

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

const ADD_ORGANIZER_MODAL_FORM = 'AddOrganizerModalForm';

class AddOrganizerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPhone: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage.ok === true) {
      this.props.toggleAddOrganizerModal();
      this.props.toggleSuccessOrganizerAddedModalToggle();
      this.props.refresh();
      this.props.clearErrorMessagesAction();
    } else if (nextProps.errorMessage.ok === false) {
      this.props.toggleAddOrganizerModal();
      this.props.toggleFailureModalToggle();
      this.props.clearErrorMessagesAction();
    }
  }

  handleSubmit = (organizer) => {
    if (phoneNumber(this.state.userPhone) === null) {
      const userPhoneFormatted = this.state.userPhone.replace('(', '').replace(')', '').replace('-', '').replace(/\s/g, '');
      const newOrganizerUser = {
        name: organizer.firstName,
        last_name: organizer.lastName,
        phone_number: userPhoneFormatted,
        business_unit: organizer.businessUnit,
        email: organizer.organizerEmail,
        accountId: this.props.accountId,
      };
      this.props.createNewPendingOrganizerAction(newOrganizerUser);
    }
  }

  phoneHandler = (value, phone) => {
    this.setState({ [phone]: value });
  }

  render() {
    return (
      <Modal backdropClassName="backdropClass" show onHide={this.props.toggleAddOrganizerModal}>
        <Modal.Body>
          <div className="add-organizer-modal">
            <div
              className="modal-close-image"
              role="presentation"
              onKeyPress={this.props.toggleAddOrganizerModal}
              onClick={this.props.toggleAddOrganizerModal}
            />
            <div className="title-with-top-padding">Add Organizer</div>
            <div className="title-divider" />

            <AddOrganizerModalForm
              loading={this.props.loading}
              onSubmit={this.handleSubmit}
              errorMessage={phoneNumber(this.state.userPhone)}
              phoneHandler={this.phoneHandler}
              userPhone={this.state.userPhone}
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.userReducer.errorMessage,
  loading: state.userReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  createNewPendingOrganizerAction: (organizer) => dispatch(createNewPendingOrganizerAction(organizer)),
  clearErrorMessagesAction: () => dispatch(clearErrorMessagesAction()),
});

AddOrganizerModal.propTypes = {
  createNewPendingOrganizerAction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  toggleAddOrganizerModal: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  accountId: PropTypes.string.isRequired,
  toggleSuccessOrganizerAddedModalToggle: PropTypes.func,
  toggleFailureModalToggle: PropTypes.func,
  clearErrorMessagesAction: PropTypes.func.isRequired,
  errorMessage: PropTypes.shape({
    ok: PropTypes.bool,
  }),
};

AddOrganizerModal.defaultProps = {
  loading: false,
  toggleSuccessOrganizerAddedModalToggle: null,
  errorMessage: {
    ok: undefined,
  },
  toggleFailureModalToggle: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrganizerModal);

const AddOrganizerModalForm = reduxForm({
  form: ADD_ORGANIZER_MODAL_FORM,
})((props) => {
  return (
    <form className="add-organizer-modal-form" onSubmit={props.handleSubmit}>
      <Field
        name="businessUnit"
        component={Input}
        type="text"
        label="Title"
        placeholder="Enter Title"
      />
      <Field
        name="firstName"
        type="text"
        component={Input}
        label="First Name*"
        placeholder="Enter First Name"
        validate={[required]}
      />
      <Field
        name="lastName"
        type="text"
        component={Input}
        label="Last Name*"
        placeholder="Enter Last Name"
        validate={[required]}
      />
      <Field
        type="email"
        name="organizerEmail"
        component={Input}
        label="Email*"
        placeholder="name@soulcycle.com"
        validate={[required, email]}
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
      { phoneNumber(props.userPhone) && props.userPhone.length === 17 &&
        <ErrorInput errorMessage={phoneNumber(props.userPhone)} />
      }
      <div className="disclaimer-container">
        Your Admin request will be fowarded to a SoulCycle Corporate Team member<br />
        Apon Aproval, the new Admin will be added to your Organizer Admin Panel.
      </div>
      <div className="add-organizer-botton-container">
        <Button type="submit" className="add-organizer-btn" bsStyle="primary" disabled={props.addingOrganizerAccount}>
          ADD ORGANIZER &nbsp; { props.loading && <LoadingSpinner /> }
        </Button>
      </div>
    </form>
  );
});
