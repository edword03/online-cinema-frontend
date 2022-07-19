import { UserModel } from '@/models/user';

export interface UserEditInput extends Omit<UserModel, '_id' | 'createdAt'> {}
