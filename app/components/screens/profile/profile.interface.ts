import { UserModel } from '@/models/user';

export interface ProfileInput extends Pick<UserModel, 'email' | 'password'> {}
