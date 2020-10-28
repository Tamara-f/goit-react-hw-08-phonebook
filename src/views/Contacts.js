import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactEditor from '../components/ContactEditor';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import phoneOperations from '../redux/phone/phoneOperations';
// import phoneSelectors from '../redux/phone/phoneSelectors';

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <ContactEditor />
        {/* {this.props.isLoadingContacts && <h1>Doing HTTP stuff...</h1>} */}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   isLoadingContacts: phoneSelectors.getLoading(state),
// });

const mapDispatchToProps = {
  onFetchContacts: phoneOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(Contacts);
