import { getDatabase, ref, set } from 'firebase/database'

export function writeUserInfo(name: string, id: number): void {
  const db = getDatabase()
  set(ref(db, `users/${id}`), {
    username: name,
    email: name,
  })
}
