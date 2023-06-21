import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pmart.app',
  appName: 'pmart',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
