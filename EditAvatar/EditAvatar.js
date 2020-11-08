// @format
import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Button, Loading, UserImage, Tips } from 'app/components';
import { avatarImages, openCamera, openPicker } from 'app/utils';
import { logEvent, sendSentryError } from 'app/services';
import { images } from 'app/theme';

import styles from './EditAvatar.styles';

export default class EditAvatar extends React.Component {
  static propTypes = {
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    currentUser: PropTypes.object.isRequired,
    createImage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isOnboarding: PropTypes.bool,
    setAvatar: PropTypes.func,
  };

  static defaultProps = {
    isOnboarding: false,
  };

  constructor() {
    super();

    this.avatars = [];
    avatarImages.map((image) => {
      this.avatars.push({
        accessibilityLabel: image.accessibilityLabel,
        name: image.name,
        src: images[image.name],
      });
    });
  }

  updateImage = (type) => {
    const photoFunction = type === 'picker' ? openPicker : openCamera;
    let eventToTrack;

    if (this.props.isOnboarding) {
      eventToTrack =
        type === 'picker' ? `setup_profile_s2_upload_photo` : 'setup_profile_s2_take_photo';
    } else {
      eventToTrack = type === 'picker' ? `profile_upload_photo` : 'profile_take_photo';
    }

    logEvent(eventToTrack);

    photoFunction(async (response) => {
      if (response) {
        try {
          // TODO - change so it gets this value from global state
          const avatar = await this.props.createImage(response);
          this.props.setAvatar(avatar);
        } catch (error) {
          sendSentryError('Error creating an image file from a profile picture', error);
        }
      }
    });
  };

  render() {
    const { avatar, currentUser, isLoading, setAvatar } = this.props;
    const tipsText = 'We have noticed that people uploading a real picture get more connections. ';

    if (currentUser.loading) return <Loading />;

    return (
      <React.Fragment>
        <Tips text={tipsText} />
        <View style={styles.avatarContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <UserImage src={avatar} resizeMode={'contain'} size="massive" />
          )}
        </View>
        <View style={styles.avatarButtons}>
          <View style={[styles.button, styles.takePhotoButton]}>
            <Button
              accessibilityLabel="Take a photo with your camera"
              onPress={() => this.updateImage('camera')}
              theme="bordered"
            >
              <View style={styles.row}>
                <Image source={images.camera} style={[styles.buttonIcon, styles.cameraIcon]} />
                <Text style={styles.buttonText}>Take photo</Text>
              </View>
            </Button>
          </View>
          <View style={[styles.button, styles.uploadPhotoButton]}>
            <Button
              accessibilityLabel="Upload a photo from your gallery"
              onPress={() => this.updateImage('picker')}
              theme="bordered"
            >
              <View style={styles.row}>
                <Image source={images.upload} style={[styles.buttonIcon, styles.uploadIcon]} />
                <Text style={styles.buttonText}>Upload photo</Text>
              </View>
            </Button>
          </View>
        </View>
        <Text style={styles.title}>Or, choose an avatar </Text>
        <ScrollView style={styles.avatarImagesContainer} horizontal={true}>
          {this.avatars.map((image) => (
            <TouchableOpacity
              accessibilityLabel={image.accessibilityLabel}
              key={image.name}
              onPress={() => setAvatar(image.name)}
              style={[
                styles.avatarImageItem,
                avatar === image.name ? styles.avatarImageItemSelected : null,
              ]}
            >
              <Image source={image.src} style={styles.avatarImage} resizeMode={'contain'} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </React.Fragment>
    );
  }
}
