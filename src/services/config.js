import Config from 'react-native-config';

export const AppConfig = {
  apiBaseUrl: Config.API_BASE_URL,
  appName: Config.APP_NAME,
  debugMode: String(Config.DEBUG_MODE).toLowerCase() === 'true',
  version: Config.VERSION,
  logLevel: Config.LOG_LEVEL,
};

export default AppConfig;
