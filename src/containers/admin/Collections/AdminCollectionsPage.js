import React, { Component } from "react";
import Table from 'components/tables/Table';

export default class AdminCollectionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: [],
      loading: false,
    };
  }

  toggleAddNewCollectionClick = () => {
    this.setState(prevState => ({
      showNewCollectionModal: !prevState.showNewCollectionModal,
    }));
  };

  handleNewCollectionSubmitClick = () => {
    console.log('adding new collection');
  };

  render() {
    const headings = [ 'Nombre', 'Colección Padre', 'Tags', 'Activa' ];
    const rows = [];
    return (
      <div className="admin-collections__container">
        <div className="admin-collections__header">
          <h1 className="admin-collections__title">Admin Collections Page</h1>
          <div className="admin-collections__toolbar">
            <div className="admin-collections__add-button">
              <button type="btn-primary" onClick={this.handleNewCollectionClick}>Agregar</button>
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
