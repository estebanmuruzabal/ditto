import React, { Component } from "react";
import Table from 'components/tables/Table';
import AddNewCollectionModal from "containers/admin/Collections/AddNewCollectionModal";
import { addCollectionAction } from 'actions/collection.actions';
import { connect } from 'react-redux';
class AdminCollectionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewCollectionModal: false,
      collections: [],
    };
  }

  toggleAddCollectionModal = () => {
    this.setState(prevState => ({
      showNewCollectionModal: !prevState.showNewCollectionModal,
    }));
  };

  handleNewCollectionSubmit = collection => {
    this.props.dispatch(addCollectionAction({
      name: collection.name,
      tags: [collection.tag],
    }));
  };

  render() {
    const headings = [ 'Nombre', 'Colección Padre', 'Tags', 'Activa' ];
    const rows = [];

    const newCollectionModal = () => {
      if (this.state.showNewCollectionModal) {
        return (
          <AddNewCollectionModal
            title="Add new collection"
            onCloseClick={this.toggleAddCollectionModal}
            loading={this.props.loading}
            onCancelClick={this.toggleAddCollectionModal}
            handleSubmit={this.handleNewCollectionSubmit}
          />
        );
      }
    };

    return (
      <div className="admin-collections__container">
        {newCollectionModal()}
        <div className="admin-collections__header">
          <h1 className="admin-collections__title">Admin Collections Page</h1>
          <div className="admin-collections__toolbar">
            <div className="admin-collections__add-button">
              <button type="btn-primary" onClick={this.toggleAddCollectionModal}>Agregar</button>
            </div>
          </div>
        </div>
        {!this.state.loading && this.state.collections.length === 0 ?
          <div className="admin-collections__no-results">No hay colleciones disponibles</div>
          :
          <div className="admin-collections__list">
            <Table headings={headings} rows={rows} />
          </div>
        }
      </div>
    );
  }
}

AdminCollectionsPage.defaultProps = {
  paymentProfile: {},
};

const mapStateToProps = state => ({
  loading: state.collectionReducer.addingNewCollection,
  addNewCollectionResponse: state.collectionReducer.addNewCollectionResponse,
});

export default connect(mapStateToProps)(AdminCollectionsPage);