import { LoginCredentialsDTO } from './../../../dto/login';
import { apiService } from './../../../services/index';
import { ILoginResponse } from './../../../models/login';

export const getUser = (): Promise<ILoginResponse> => {
  return apiService.get('/auth/me');
};

export const login= (data: LoginCredentialsDTO): Promise<ILoginResponse> => {
    return apiService.post('/auth/login', data);
  };