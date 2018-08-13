import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LoadingSpinner from 'components/common/loading/LoadingSpinner';

const ConfirmWhateverModal = ({
  handleCancelClick, handleConfirmClick, loading, title, subtitle, confirmButtonText, showCancel,
}) => {
  return (
    <Modal backdropClassName="backdropClass" show onHide={handleCancelClick}>
      <Modal.Body>
        <div className="confirm-modal-container">
          <div className="title-modal">{title}</div>
          <div className="subtitle-modal">{subtitle}</div>
          { showCancel ?
            <div className="buttons-container">
              <Button type="submit" bsStyle="primary" className="yellow-btn-square" onClick={handleConfirmClick} disabled={loading}>
                {confirmButtonText} &nbsp; { loading && <LoadingSpinner /> }
              </Button>
              <Button bsStyle="primary" className="gray-btn-square" onClick={handleCancelClick}>
                CANCEL
              </Button>
            </div>
            :
            <div className="button-container">
              <Button type="submit" bsStyle="primary" className="yellow-btn-square" onClick={handleConfirmClick} disabled={loading}>
                {confirmButtonText} &nbsp; { loading && <LoadingSpinner /> }
              </Button>
            </div>
          }
        </div>
      </Modal.Body>
    </Modal>
  );
};

ConfirmWhateverModal.propTypes = {
  handleCancelClick: PropTypes.func,
  handleConfirmClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  showCancel: PropTypes.bool,
};

ConfirmWhateverModal.defaultProps = {
  loading: false,
  showCancel: true,
  handleCancelClick: null,
};

export default ConfirmWhateverModal;
