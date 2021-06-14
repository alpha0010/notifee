/* eslint-disable no-undef */

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.NativeModules.NotifeeApiModule = {};

  RN.Platform = jest.fn().mockImplementation(() => ({
    ...RN.Platform,
    OS: 'android',
    Version: 123,
  }));
  return RN;
});

//github.com/testing-library/native-testing-library/issues/85
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { EventEmitter } = require('events');
  return EventEmitter;
});

jest.mock('react-native/Libraries/vendor/emitter/EventEmitter', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { EventEmitter } = require('events');
  return EventEmitter;
});

jest.mock('react-native/Libraries/LogBox/LogBox');
