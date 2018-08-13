import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hasErrorMessage } from 'helpers/checkers';
import { addPaymentMethodAction, createProfileAndAddPaymeMethodAction, clearPaymentErrorsAction } from 'actions/payment.actions';
import CreditCardForm from 'components/common/CreditCard/CreditCardForm';
import ConfirmWhateverModal from 'components/common/Modal/ConfirmWhateverModal';

class AddPaymentMethodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openNotificationModalToggle: false,
      errorMessage: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (hasErrorMessage(nextProps.addPaymentMethodResponse)) {
      this.setState({ errorMessage: `${nextProps.addPaymentMethodResponse.errors[0].message}`, openNotificationModalToggle: true });
      this.props.clearPaymentErrorsAction();
    } else if (nextProps.addPaymentMethodResponse.ok === true) {
      this.props.toggleSuccessPaymentAddedModalToggle();
      this.props.refresh();
    }
  }

  toggleNotificationModalToggle = () => {
    this.setState(prevState => ({
      openNotificationModalToggle: !prevState.openNotificationModalToggle,
    }));
  }

  handleSubmit = (newPaymentMethod) => {
    if (this.props.paymentId) {
      const formattedNewPaymentMethod = {
        account_id: this.props.accountId,
        customer_profile_id: this.props.paymentId,
        card_number: newPaymentMethod.creditCardNumber,
        card_exp_date: newPaymentMethod.exp_month + newPaymentMethod.exp_year,
        card_cvv: newPaymentMethod.cvv,
        bill_to: {
          first_name: newPaymentMethod.cardHolderName,
          last_name: newPaymentMethod.cardHolderName,
          company: newPaymentMethod.cardNickName,
          zip: newPaymentMethod.zipCode,
        },
      };
      this.props.addPaymentMethodAction(formattedNewPaymentMethod);
    } else if (this.props.accountInfo !== undefined) {
      const newCustomerProfile = {
        account_name: this.props.accountInfo.name,
        account_id: this.props.accountId,
        account_email: this.props.accountInfo.email,
        card_number: newPaymentMethod.creditCardNumber,
        card_exp_date: newPaymentMethod.exp_month + newPaymentMethod.exp_year,
        card_cvv: newPaymentMethod.cvv,
        bill_to: {
          first_name: newPaymentMethod.cardHolderName,
          last_name: newPaymentMethod.cardHolderName,
          company: newPaymentMethod.cardNickName,
          zip: newPaymentMethod.zipCode,
        },
      };
      this.props.createProfileAndAddPaymeMethodAction(newCustomerProfile);
    }
  }

  render() {
    return (
      <div>
        <Modal backdropClassName="backdropClass" show onHide={this.props.toggleAddPaymentModal}>
          <Modal.Body>
            <div className="add-payment-method-modal">
              <div
                className="modal-close-image"
                role="presentation"
                onKeyPress={this.props.toggleAddPaymentModal}
                onClick={this.props.toggleAddPaymentModal}
              />
              <div className="title-with-top-padding">Add Credit Card</div>
              <div className="title-divider" />

              <CreditCardForm
                toggleAddPaymentModal={this.props.toggleAddPaymentModal}
                onSubmit={this.handleSubmit}
                showSubmitButton
                addingPaymentMethod={this.props.addingPaymentMethod}
              />

            </div>
          </Modal.Body>
        </Modal>
        { this.state.openNotificationModalToggle &&
          <ConfirmWhateverModal
            handleConfirmClick={this.toggleNotificationModalToggle}
            showCancel={false}
            title="Oops"
            confirmButtonText="ACCEPT"
            subtitle={this.state.errorMessage ? `${this.state.errorMessage}` : 'Something went wrong, please try again later.'}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingPaymentMethod: state.paymentReducer.addingPaymentMethod,
  addPaymentMethodResponse: state.paymentReducer.addPaymentMethodResponse,
});

const mapDispatchToProps = dispatch => ({
  clearPaymentErrorsAction: () => dispatch(clearPaymentErrorsAction()),
  addPaymentMethodAction: (newPaymentMethod) => dispatch(addPaymentMethodAction(newPaymentMethod)),
  createProfileAndAddPaymeMethodAction: (customerProfile) => dispatch(createProfileAndAddPaymeMethodAction(customerProfile)),
});

AddPaymentMethodModal.propTypes = {
  paymentId: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
  clearPaymentErrorsAction: PropTypes.func.isRequired,
  toggleAddPaymentModal: PropTypes.func.isRequired,
  addPaymentMethodAction: PropTypes.func.isRequired,
  createProfileAndAddPaymeMethodAction: PropTypes.func.isRequired,
  accountInfo: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  addPaymentMethodResponse: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  addingPaymentMethod: PropTypes.bool,
  toggleSuccessPaymentAddedModalToggle: PropTypes.func.isRequired,
};

AddPaymentMethodModal.defaultProps = {
  accountInfo: undefined,
  addPaymentMethodResponse: {},
  addingPaymentMethod: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPaymentMethodModal);
