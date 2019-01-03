import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

const Avatar = ({
  height,
  rounded,
  source,
  styles,
  width,
}) => <Image 
  source={source}
  style={{ 
    width, 
    height, 
    borderRadius: rounded ? ( width / 2 ) : 0,
    ...styles,
  }}
/>;

Avatar.defaultProps = {
  height: 50,
  rounded: false,
  styles: {},
  width: 50,
};

Avatar.propTypes = {
  height: PropTypes.number,
  source: PropTypes.shape({ uri: PropTypes.string }),
  rounded: PropTypes.bool,
  styles: PropTypes.object,
  width: PropTypes.number,
};

export default Avatar;
