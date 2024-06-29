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

export type Task = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
  developerId?: number;
};

export type TaskStatus = 'Todo' | 'In Progress' | 'Completed' | 'Expired' | 'Archived';

export type Developer = {
  username: string;
  id: string | number;
};

export type TaskFormInput = {
  title: string;
};

export type TaskUpdateInput = {
  status: TaskStatus;
  developerId?: number;
};
