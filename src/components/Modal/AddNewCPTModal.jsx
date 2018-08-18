import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import { required, email } from 'helpers/validators';
import { createNewUserAction, clearErrorMessagesAction } from 'actions/user.actions';
import Input from 'components/common/input/Input';
import LoadingSpinner from 'components/common/loading/LoadingSpinner';

const ADD_NEW_CPT_MODAL_FORM = 'AddNewCPTModalForm';

class AddNewCPTModal extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage.ok === true) {
      this.props.refresh();
      this.props.toggleAddNewCPTModal();
      this.props.toggleSuccessCPTModalToggle();
      this.props.clearErrorMessagesAction();
      ReactGA.event({
        category: 'Add User Modal',
        action: 'CPT user has been created',
      });
    } else if (nextProps.errorMessage.ok === false && nextProps.errorMessage.errors && nextProps.errorMessage.errors[0] && nextProps.errorMessage.errors[0].message) {
      this.props.toggleAddNewCPTModal();
      this.props.toggleFailureModalToggle(nextProps.errorMessage.errors[0].message);
      this.props.clearErrorMessagesAction();
    }
  }

  handleSubmit = (userInfo) => {
    const newCPTUser = {
      name: userInfo.firstName + ' ' + userInfo.lastName,
      email: userInfo.organizerEmail,
      pending: false,
      active: false,
      user_role: 'cpt',
      deleted: false,
    };
    this.props.createNewUserAction(newCPTUser);
  }

  render() {
    return (
      <Modal backdropClassName="backdropClass" show onHide={this.props.toggleAddNewCPTModal}>
        <Modal.Body>
          <div className="add-cpt-modal">
            <div
              onKeyPress={this.props.toggleAddNewCPTModal}
              className="modal-close-image"
              role="presentation"
              onClick={this.props.toggleAddNewCPTModal}
            />
            <div className="title-with-top-padding">Add Admin</div>
            <div className="title-divider" />

            <AddNewCPTModalForm
              creatingNewUser={this.props.creatingNewUser}
              onSubmit={this.handleSubmit}
            />

          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  creatingNewUser: state.userReducer.creatingNewUser,
  errorMessage: state.userReducer.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  createNewUserAction: (userInfo) => dispatch(createNewUserAction(userInfo)),
  clearErrorMessagesAction: () => dispatch(clearErrorMessagesAction()),
});

AddNewCPTModal.propTypes = {
  createNewUserAction: PropTypes.func.isRequired,
  clearErrorMessagesAction: PropTypes.func.isRequired,
  toggleFailureModalToggle: PropTypes.func,
  toggleAddNewCPTModal: PropTypes.func.isRequired,
  toggleSuccessCPTModalToggle: PropTypes.func.isRequired,
  creatingNewUser: PropTypes.bool,
  refresh: PropTypes.func.isRequired,
  errorMessage: PropTypes.shape({
    ok: PropTypes.bool,
  }),
};

AddNewCPTModal.defaultProps = {
  creatingNewUser: false,
  errorMessage: {
    ok: undefined,
  },
  toggleFailureModalToggle: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCPTModal);

const AddNewCPTModalForm = reduxForm({
  form: ADD_NEW_CPT_MODAL_FORM,
})((props) => {
  return (
    <form className="add-organizer-modal-form" onSubmit={props.handleSubmit}>
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
      <div className="add-organizer-botton-container">
        <Button className="add-cpt-btn" type="submit" disabled={props.creatingNewUser}>
          SUBMIT &nbsp; { props.creatingNewUser && <LoadingSpinner /> }
        </Button>
      </div>
    </form>
  );
});
