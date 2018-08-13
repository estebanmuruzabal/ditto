import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import history from 'helpers/history';

const toggleModal = (redirectTo) => {
  history.push('/' + redirectTo);
};

const NotificationModal = ({
  title, subtitle, redirectTo,
}) => {
  return (
    <Modal backdropClassName="backdropClass" show onHide={() => toggleModal(redirectTo)}>
      <Modal.Body>
        <div className="confirm-modal-container">
          <div className="title-modal">{title}</div>
          <div className="subtitle-modal">{subtitle}</div>
          <div className="button-container">
            <Button type="submit" bsStyle="primary" className="yellow-btn-square" onClick={() => toggleModal(redirectTo)}>
              ACCEPT
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

NotificationModal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default NotificationModal;
