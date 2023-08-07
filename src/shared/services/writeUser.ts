import { getDatabase, ref, set } from 'firebase/database'
import { IUser } from '@/shared/types/user'

export function writeUserInfo(userData: IUser, id: string): void {
  const db = getDatabase()
  set(ref(db, `users/${id}`), {
    name: userData.name,
    email: userData.email,
  })
}
