import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

import { setAxiosInterceptor } from 'services/api';
import { authStore } from 'services/store/auth';

import { EncryptionUtils } from './Types';
import { APP_SECRET, LocalStorageKeys } from './constants';

const { actions } = authStore.getState();

//To concate the path for the public folder
export const toAbsoluteUrl = (pathname: string) => window.location.origin + pathname;

// Rehydrate store and set axios default headers
export const setupAxios = () => {
  const userStorage = localStorage.getItem(LocalStorageKeys.user);
  const tokenStorage = localStorage.getItem(LocalStorageKeys.authToken);

  if (userStorage && tokenStorage) {
    const token = encryptionUtils.decryptData(tokenStorage);
    const userData = encryptionUtils.decryptData(userStorage);

    if (token) {
      const USER_DATA = { ...userData, authToken: token };
      actions.authSuccess({ data: USER_DATA });
    } else {
      actions.authFail();
    }
  }

  // Set Axios Interceptor
  setAxiosInterceptor();
};

export const appLoader = (status: boolean) => actions.loaderChange(status);

// Crypto-js for encryption and decryption
export const encryptionUtils: EncryptionUtils = {
  encryptData: (data: any): string => {
    try {
      const ciphertext = AES.encrypt(
        JSON.stringify(data),
        APP_SECRET ?? 'default-secret-key'
      ).toString();
      return ciphertext;
    } catch (error) {
      console.error('Error encrypting data:', error);
      return '';
    }
  },

  decryptData: (data: any): object | null => {
    try {
      const bytes = AES.decrypt(data, APP_SECRET ?? 'default-secret-key');
      const decryptedData = JSON.parse(bytes.toString(Utf8));
      return decryptedData;
    } catch (error) {
      console.error('Error decrypting data:', error);
      return null;
    }
  }
};
