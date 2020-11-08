// @format
import { navigate, routes } from 'app/navigation';
import { logEvent } from 'app/services';
import { images } from 'app/theme';

const getOnBoardingData = (modalProvider, notificationPressed, notificationPressedText) => {
  return [
    {
      title: 'Turn on notifications',
      image: images.localOnboardingOne,
      text: 'Never miss notifications about new messages, connections, and resources.',
      button: {
        onPress: () => {
          logEvent('onboarding_enable_notifications');
          return notificationPressed ? null : modalProvider.requestPermission();
        },
        text: notificationPressed ? notificationPressedText : 'Enable Notifications',
        theme: notificationPressed ? 'quaternary' : 'primary',
      },
      smallButton: {
        onPress: () => {
          logEvent('onboarding_skip');
          return modalProvider.closeModal();
        },
        text: 'Skip',
      },
    },
    {
      title: 'Meet your Ambassador',
      image: images.localOnboardingTwo,
      text:
        "Our Ambassadors are professionals providing career-related tips and advice specific to your field. You'll recognize Arrive Ambassadors by the gold circle on their profile.",
      button: {
        onPress: () => {
          logEvent('onboarding_meet_ambassador');
          return modalProvider.closeModal();
        },
        text: 'Start connecting',
      },
      smallButton: {
        onPress: () => {
          logEvent('onboarding_skip');
          return modalProvider.closeModal();
        },
        text: 'Skip',
      },
    },
    {
      title: 'Check your connections!',
      image: images.localOnboardingThree,
      text:
        "Every week, we match you with three new connections based on your profile. Start connecting with this week's connections today!",
      button: {
        onPress: () => {
          modalProvider.toggleVisibility(false);
          logEvent('onboarding_view_profile');
          navigate(routes.profile);
        },
        text: 'View my profile',
      },
      smallButton: {
        onPress: () => {
          logEvent('onboarding_skip');
          return modalProvider.toggleVisibility(false);
        },
        text: 'Skip',
      },
    },
  ];
};

export { getOnBoardingData };
