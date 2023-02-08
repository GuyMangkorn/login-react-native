import { delay } from '../utils/common'

export const loginHandler = async (
  username: string,
  password: string,
): Promise<boolean> => {
  if (username == 'test@test.com' && password == '12345678') {
    await delay(2000)
    return true
  }
  await delay(1500)
  throw new Error("404 can't find this email in rules.")
}
