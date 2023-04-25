import { IUser } from '@/shared/types/user.type'

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}
