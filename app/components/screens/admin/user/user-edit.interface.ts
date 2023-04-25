import { IUser } from '@/shared/types/user.type'

export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}
