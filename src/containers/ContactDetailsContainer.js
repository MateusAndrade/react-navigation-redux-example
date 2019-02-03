import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContactDetails from '../components/ContactDetails';

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(null, mapDispatchToProps)(ContactDetails);
