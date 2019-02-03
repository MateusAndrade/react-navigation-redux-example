import React from 'react';
import PropTypes from 'prop-types';

import { Image, View } from 'react-native';

const Avatar = ({
  height,
  rounded,
  source,
  styles,
  width,
}) => (
  <View style={{
    width, 
    height, 
    borderRadius: rounded ? ( width / 2 ) : 0,
    elevation: 5,
  }}>
    <Image 
      source={source}
      style={{
        borderWidth: 2,
        borderColor: '#fff',    
        width, 
        height, 
        borderRadius: rounded ? ( width / 2 ) : 0,
        ...styles,
      }}
    /> 
  </View>
);

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
