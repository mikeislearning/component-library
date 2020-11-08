import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  avatarButtons: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,
    marginHorizontal: -7,
  },
  avatarContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.gray.light,
    borderRadius: 200,
    borderWidth: 1,
    height: 160,
    marginBottom: 30,
    width: 160,
  },
  avatarImage: {
    height: 60,
    margin: 10,
    width: 60,
  },
  avatarImageItem: {
    borderColor: colors.gray.light,
    borderRadius: 60,
    borderWidth: 1,
    marginRight: 10,
  },
  avatarImageItemSelected: {
    backgroundColor: colors.green.light,
    borderColor: colors.green.dark,
  },
  avatarImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 15,
    marginHorizontal: 7,
  },
  buttonIcon: {
    marginRight: 13,
  },
  buttonText: {
    color: colors.blue,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
  },
  cameraIcon: {
    height: 16,
    width: 19,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  takePhotoButton: {
    width: 150,
  },
  title: {
    alignSelf: 'center',
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: fonts.size.h5,
    marginBottom: 20,
  },
  uploadIcon: {
    height: 19,
    width: 16,
  },
  uploadPhotoButton: {
    width: 170,
  },
});

export default styles;
