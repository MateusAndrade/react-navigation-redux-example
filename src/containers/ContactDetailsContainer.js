import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactDetails from '../components/ContactDetails';

import { deleteContact, resetDeleteContact } from '../actions'

const mapStateToProps = state => ({
  deletedContact: state.contacts.deletedContact,
  isDeletingContact: state.contacts.isDeletingContact,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteContact,
  resetDeleteContact,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
