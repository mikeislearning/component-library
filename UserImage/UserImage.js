// @format

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, View } from 'react-native';

import { ENV } from 'app/environment';

import { images } from 'app/theme';

import styles from './UserImage.styles';

class UserImage extends Component {
  static propTypes = {
    resizeMode: PropTypes.string,
    size: PropTypes.string,
    src: PropTypes.string,
  };

  static defaultProps = {
    resizeMode: 'contain',
    size: 'small',
  };

  render() {
    const { resizeMode, size, src } = this.props;
    let source;
    if (!src) {
      source = images.emptyProfile;
    } else if (src && src.indexOf('avatar') < 0 && src !== 'emptyProfile') {
      let uri = src;
      // HACK - sort of ugly handling for android images to work locally
      if (Platform.OS === 'android' && ENV === 'local') {
        uri = src.replace('localhost', '10.0.2.2');
      }
      source = { uri };
    } else {
      source = images[src];
    }

    const style = [styles.image, styles[size]];
    const containerStyle = [styles.container, styles[size]];

    return (
      <View style={containerStyle}>
        <Image style={style} source={source} resizeMode={resizeMode} />
      </View>
    );
  }
}

export default UserImage;
