import React, { Component } from "react";
import Table from 'components/tables/Table';
import { Link } from 'react-router-dom';
import AddNewCollectionModal from "containers/admin/Collections/AddNewCollectionModal";
import { addCollectionAction, clearCollectionResponsesAction, fetchCollectionsIfNeeded } from 'actions/collection.actions';
import { setMessageAction } from  'actions/messages.actions';
import { connect } from 'react-redux';
class AdminUsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewCollectionModal: false,
      collections: [],
    };
  }

  componentDidMount() {
    const { dispatch, collectionReducer } = this.props;
    dispatch(fetchCollectionsIfNeeded(collectionReducer));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, collections } = nextProps;
    dispatch(fetchCollectionsIfNeeded(collections));
    if (nextProps.addNewCollectionResponse.id) {
      this.props.dispatch(clearCollectionResponsesAction());
      this.props.dispatch(setMessageAction({
        redirectTo: `/edit-collection/${nextProps.addNewCollectionResponse.id}`,
        showCancel: true,
        title: 'Confirmation',
        confirmButtonText: 'ACCEPT',
        subtitle: 'Collection created successfully. Would you like to edit it right now?',
      }));
    }
  }

  toggleAddCollectionModal = () => {
    this.setState(prevState => ({
      showNewCollectionModal: !prevState.showNewCollectionModal,
    }));
  };

  handleNewCollectionSubmit = collection => {
    this.toggleAddCollectionModal();
    this.props.dispatch(addCollectionAction({
      name: collection.name,
      tags: [collection.tag],
    }));
  };

  render() {
    const headings = [ 'Nombre', 'Colección Padre', 'Tags', 'Activa' ];
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
    const rows = this.props.collections && this.props.collections.map((collection) => {
      return {
        data: [
          <span className="admin-collections__link">
            <Link to={`/edit-collection/${collection.id}`}>
              {collection.name.toString()}
            </Link>
          </span>,
          <div>
            {collection.parentId ?
              <span>
                {collection.parentId}
              </span>
              :
              <span>-</span>
            }
          </div>,
          <div className="admin-collections__labels">
            {collection.tags.map((section, idx) => {
              return (
                <div key={idx} className="admin-collections__label">
                  {section}
                </div>
              );
            })}
          </div>,
          <div>{collection.enabled.toString()}</div>,
        ]
      };
    });
    console.log(rows);    
    return (
      <div className="admin-collections__container">
        {newCollectionModal()}
        <div className="admin-collections__header">
          <h1 className="admin-collections__title">Admin Users Page</h1>
        </div>
        {rows && rows.length > 0 ?
          <div className="admin-collections__list">
            <Table headings={headings} rows={rows} />
          </div>
          :
          <div className="admin-collections__no-results">No hay usuarios disponibles</div>
        }
      </div>
    );
  }
}

AdminUsersPage.defaultProps = {
  users: {},
};

const mapStateToProps = state => ({
  users: state.adminUsersReducer.users,
  usersError: state.adminUsersReducer.usersError,
});

export default connect(mapStateToProps)(AdminUsersPage);