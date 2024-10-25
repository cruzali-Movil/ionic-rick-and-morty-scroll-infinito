import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.inc',
  appName: 'App-API-RickAndMorty',
  webDir: 'www',
  // Solo se muestra en algunos dispositivos, no en todos.
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Para que no se active desde aqui
      launchAutoHide: true,
      //launchFadeOutDuration: 3000,
      backgroundColor: "#f5cf0d",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false, // acm
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false, // acm
      splashImmersive: false, // acm
      layoutName: "launch_screen",
      useDialog: false, // acm
    },
  },
};

export default config;
