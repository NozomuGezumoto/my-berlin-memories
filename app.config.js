// ============================================
// My Berlin - Fixed config (no env / no dynamic city)
// ============================================

export default {
  expo: {
    name: 'My Berlin',
    slug: 'my-berlin',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myberlin',
    userInterfaceStyle: 'light',
    newArchEnabled: true,

    extra: {
      city: 'berlin',
      cityName: 'My Berlin',
      cityNameJa: 'My ベルリン',
      eas: {
        projectId: 'b4a9c61a-84cb-43a3-873b-49a1ad34de39',
      },
    },

    owner: 'nozomusp',

    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.mycity.myberlin',
    },

    android: {
      package: 'com.mycity.myberlin',
      adaptiveIcon: {
        backgroundColor: '#f5f5f0',
        foregroundImage: './assets/images/android-icon-foreground.png',
        backgroundImage: './assets/images/android-icon-background.png',
        monochromeImage: './assets/images/android-icon-monochrome.png',
      },
      edgeToEdgeEnabled: true,
    },

    web: {
      output: 'static',
      favicon: './assets/images/favicon.png',
    },

    plugins: [
      'expo-font',
      '@react-native-community/datetimepicker',
      'expo-router',
      [
        'expo-location',
        {
          locationWhenInUsePermission:
            'My Berlin uses your location only when you add a memory: to place a pin at your current position on the map. For example, when you are at a café or a place you want to remember, you can tap "Use Current Location" and the app will save that spot with a photo or note. Your location is stored only on your device and is not shared with anyone.',
        },
      ],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#f5f5f0',
        },
      ],
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
