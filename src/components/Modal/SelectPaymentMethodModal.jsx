import React from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPaymentMethodAction } from 'actions/payment.actions';

import CreditCardForm from 'components/common/CreditCard/CreditCardForm';

import { reduxForm } from 'redux-form';
import SelectComponent from 'components/common/select/SelectComponent';

const SELECT_CREDIT_CARD_FORM = 'SelectCreditCardForm';

class SelectPaymentMethodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentProfileSelected: this.props.paymentProfile,
    };
  }

  handleChangePaymentProfile = customerPaymentProfileIdSelected => {
    const paymentProfileSelected = this.props.profiles.filter(profile => profile.customerPaymentProfileId === customerPaymentProfileIdSelected);
    this.setState({ paymentProfileSelected: paymentProfileSelected[0] });
  }

  /** Add new card */
  handleSubmit = newPaymentMethod => {
    const formattedNewPaymentMethod = {
      customer_profile_id: this.props.customerProfileId,
      account_id: this.props.accountId,
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
    this.props.toggleSelectPaymentModal();
    this.props.refresh();
  }

  selectCreditCardhandler = () => {
    this.props.handleChangePaymentProfileSelected(this.state.paymentProfileSelected);
    this.props.toggleSuccessModalToggle('Credit card successfully selected');
  }

  render() {
    const creditCardList = this.props.profiles && this.props.profiles.map(profile => {
      return {
        value: profile.customerPaymentProfileId,
        name: profile.billTo.firstName,
      };
    });
    return (
      <Modal backdropClassName="backdropClass" show onHide={this.props.toggleSelectPaymentModal}>
        <Modal.Body>
          <div className="select-payment-method-modal">
            <div
              className="modal-close-image"
              role="presentation"
              onKeyPress={this.props.toggleSelectPaymentModal}
              onClick={this.props.toggleSelectPaymentModal}
            />
            <div className="title-with-top-padding">Change Credit Card</div>
            <div className="title-divider" />
            <SelectCreditCardForm
              creditCardList={creditCardList}
              handleChange={(e) => this.handleChangePaymentProfile(e.target.value)}
              paymentProfile={this.state.paymentProfileSelected}
            />
            <div className="btn-wrapper">
              <button type="button" className="btn btn-select-card" onClick={this.selectCreditCardhandler}>
                SELECT CARD
              </button>
            </div>

            <div className="title-with-top-padding">Add New Credit Card</div>
            <div className="title-divider" />
            <CreditCardForm
              onSubmit={this.handleSubmit}
              showSubmitButton
              errorMessage=""
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  selectingCreditCard: state.accountReducer.selectingCreditCard,
  addingPaymentMethod: state.paymentReducer.addingPaymentMethod,
});

const mapDispatchToProps = dispatch => ({
  addPaymentMethodAction: (newPaymentMethod) => dispatch(addPaymentMethodAction(newPaymentMethod)),
});

SelectPaymentMethodModal.propTypes = {
  accountId: PropTypes.string.isRequired,
  toggleSelectPaymentModal: PropTypes.func.isRequired,
  addPaymentMethodAction: PropTypes.func.isRequired,
  handleChangePaymentProfileSelected: PropTypes.func.isRequired,
  toggleSuccessModalToggle: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  profiles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  customerProfileId: PropTypes.string.isRequired,
  paymentProfile: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

SelectPaymentMethodModal.defaultProps = {
  paymentProfile: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPaymentMethodModal);


const SelectCreditCardForm = reduxForm({
  form: SELECT_CREDIT_CARD_FORM,
})((props) => {
  return (
    <form className="credit-card-form">
      <div className="credit-card-container">
        <SelectComponent
          name="sc_select_card"
          label="Choose Card"
          placeholder="Choose New Card"
          handleChange={props.handleChange}
          selectOptions={props.creditCardList}
          value={props.paymentProfile.customerPaymentProfileId}
        />
      </div>
    </form>
  );
});
