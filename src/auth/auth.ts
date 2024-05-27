import { checkUsers } from "api";
import { passwordCheck } from "utils";
export class Auth {
  async login(username: string, password: string) {
    try {
      const users = await checkUsers(username);
      if (users === null) {
        return "User not found";
      }
      const checkPassword = await passwordCheck(password, users.passwd);
      if (checkPassword === false) {
        return "Password not match";
      }
      users;
    } catch (error: any) {
      return error;
    }
  }
}
