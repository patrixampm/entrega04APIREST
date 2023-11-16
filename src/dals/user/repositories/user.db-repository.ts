import { hashPassword } from "#common/helpers/index.js";
import { userContext } from "../user.context.js";
import { User } from "../user.model.js";
import { UserRepository } from "./user.repository.js";

export const dbRepository: UserRepository = {
  getUserByEmailAndPassword: async (email: string, password: string) => {
    const user = await userContext.findOne({
      email,
    });
    const hashedPassword = await hashPassword(password, user?.salt);
    return user?.password === hashedPassword
      ? ({
          _id: user._id,
          email: user.email,
          role: user.role,
        } as User)
      : null;
  },
};
