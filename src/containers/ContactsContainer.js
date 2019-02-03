import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getContactsInfo } from '../actions';

import Contacts from '../components/Contacts';

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  isFetching: state.contacts.isFetching,
  error: state.contacts.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContactsInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
