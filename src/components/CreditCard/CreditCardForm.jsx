import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';

import { required, zip, creditCard, cvvValidation } from 'helpers/validators';
import Input from 'components/common/input/Input';
import Select from 'components/common/select/Select';
import LoadingSpinner from 'components/common/loading/LoadingSpinner';
import { createTextMask } from 'redux-form-input-masks';

const yearOptions = [
  { name: 'Year', value: '' },
  { name: '2018', value: '2018' },
  { name: '2019', value: '2019' },
  { name: '2020', value: '2020' },
  { name: '2021', value: '2021' },
  { name: '2022', value: '2022' },
  { name: '2023', value: '2023' },
  { name: '2024', value: '2024' },
];

const creditCardMask = createTextMask({
  pattern: '9999 - 9999 - 9999 - 9999',
  placeholder: '_',
});

const monthOptions = [
  { name: 'Month', value: '' },
  { name: '01', value: '01' },
  { name: '02', value: '02' },
  { name: '03', value: '03' },
  { name: '04', value: '04' },
  { name: '05', value: '05' },
  { name: '06', value: '06' },
  { name: '07', value: '07' },
  { name: '08', value: '08' },
  { name: '09', value: '09' },
  { name: '10', value: '10' },
  { name: '11', value: '11' },
  { name: '12', value: '12' },
];

const CREDIT_CARD_FORM = 'CreditCardForm';

const CreditCardForm = reduxForm({
  form: CREDIT_CARD_FORM,
})((props) => {
  return (
    <form onSubmit={props.handleSubmit} className="credit-card-form">
      <div className="credit-card-container">
        <Field
          name="cardNickName"
          component={Input}
          type="text"
          label="Card Nickname*"
          placeholder="Enter Nickname"
          validate={[required]}
        />
        <Field
          name="cardHolderName"
          type="text"
          component={Input}
          label="Card Holder Name*"
          placeholder="Enter Name"
          validate={[required]}
        />
        <Field
          name="creditCardNumber"
          type="text"
          className="credit-card-input"
          component={Input}
          label="Credit Card Number*"
          validate={[required, creditCard]}
          {...creditCardMask}
        />
        <div className="row credit-card-details">
          <div className="col-xs-6 month">
            <Field
              type="number"
              name="exp_month"
              component={Select}
              selectOptions={monthOptions}
              label="Expiration*"
              validate={[required]}
            />
          </div>
          <div className="col-xs-6 year">
            <Field
              type="number"
              name="exp_year"
              component={Select}
              label="Expiration*"
              selectOptions={yearOptions}
              validate={[required]}
            />
          </div>
        </div>
        <div className="row credit-card-details">
          <div className="col-xs-6 cvv">
            <Field
              name="cvv"
              type="number"
              component={Input}
              showToolTip
              label="CVV*"
              validate={[required, cvvValidation]}
            />
          </div>
          <div className="col-xs-6 zip-code">
            <Field
              name="zipCode"
              type="number"
              component={Input}
              label="ZIP*"
              validate={[required, zip]}
            />
          </div>
        </div>
        { props.errorMessage &&
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <div key={props.errorMessage} className="error-text">{props.errorMessage}</div>
          </CSSTransitionGroup>
        }
        { props.showSubmitButton &&
          <div className="add-credit-card-container">
            <Button type="submit" bsStyle="primary" disabled={props.addingPaymentMethod}>
              ADD CARD &nbsp; { props.addingPaymentMethod && <LoadingSpinner /> }
            </Button>
          </div>
        }
      </div>
    </form>
  );
});

export default CreditCardForm;
