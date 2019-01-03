import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions';

import UserInfo from '../components/UserInfo';

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  error: state.user.error,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
