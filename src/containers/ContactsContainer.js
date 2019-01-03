import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getContactsInfo } from '../actions';

import Contacts from '../components/Contacts';

const mapStateToProps = state => ({
  contacts: state.user.contacts,
  isFetching: state.user.isFetching,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContactsInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
