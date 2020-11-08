// @format

import React from 'react';
import { Image, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Button, Spacer } from 'app/components';
import { colors, metrics } from 'app/theme';

import styles from './Carousel.styles';

export default class CarouselComponent extends React.Component {
  static propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.number,
        subtitle: PropTypes.subtitle,
        button: PropTypes.shape({
          text: PropTypes.string,
          theme: PropTypes.string,
          onPress: PropTypes.func,
        }),
        smallButton: PropTypes.shape({
          text: PropTypes.string,
          onPress: PropTypes.func,
        }),
      })
    ),
    fullWidth: PropTypes.bool,
  };

  state = { dotIndex: 0 };

  renderItem = ({ item }) => {
    const { fullWidth } = this.props;
    const imageStyles = fullWidth ? styles.fullImage : styles.image;
    const widthStyle = fullWidth ? styles.fullText : styles.modalText;

    const titleStyles = [widthStyle, styles.carouselText, styles.title];
    const subtitleStyles = [widthStyle, styles.carouselText, styles.subtitle];
    const textStyles = [widthStyle, styles.carouselText, styles.text];

    const resizeMode = fullWidth ? 'cover' : 'contain';

    return (
      <View style={styles.item}>
        <Text style={titleStyles}>{item.title}</Text>
        <Image source={item.image} style={imageStyles} resizeMode={resizeMode} />
        {item.subtitle && <Text style={subtitleStyles}>{item.subtitle}</Text>}
        {item.text && <Text style={textStyles}>{item.text}</Text>}
        {item?.button && (
          <React.Fragment>
            <Spacer size="small" />
            <Button fullWidth={true} onPress={item.button?.onPress} theme={item.button?.theme}>
              {item?.button?.text}
            </Button>
          </React.Fragment>
        )}
        {item?.smallButton && (
          <React.Fragment>
            <Spacer size="small" />
            <Button onPress={item.smallButton?.onPress} theme="transparent">
              {item.smallButton?.text}
            </Button>
          </React.Fragment>
        )}
      </View>
    );
  };

  render() {
    const { entries, fullWidth } = this.props;

    const width = fullWidth ? metrics.screenWidth : 300;

    return (
      <View style={styles.container}>
        <Carousel
          data={entries}
          itemWidth={width}
          onSnapToItem={(index) => this.setState({ dotIndex: index })}
          renderItem={this.renderItem}
          sliderWidth={width}
        />
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={this.state.dotIndex}
          dotColor={colors.arriveBlack}
          inactiveDotColor={colors.gray.medium}
        />
      </View>
    );
  }
}
