// Can vary depending on your BE response
export interface IApiSuccess<T> {
  data: T;
  message?: number;
}
export interface IApiError {
  message?: string;
  status: number;
}

export interface EncryptionUtils {
  encryptData: (data: any) => any;
  decryptData: (data: any) => any;
}
