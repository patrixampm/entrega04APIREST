import { disconnect } from "mongoose";
import { generateSalt, hashPassword } from "#common/helpers/index.js";
import { connectToDBServer } from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";4
import { userContext } from "#dals/user/user.context.js";
import { db } from "#dals/mock-data.js";
import { propertyContext } from "#dals/property/property.context.js";

export const run = async () => {
  await connectToDBServer(envConstants.MONGODB_URI);

  // for (const user of db.users) {
  //   const salt = await generateSalt();
  //   const hashedPassword = await hashPassword(user.password, salt);
  //   await userContext.insertMany({
  //     ...user,
  //     password: hashedPassword,
  //     salt,
  //   });
  // }

  for (const property of db.properties) {
    await propertyContext.insertMany(property);
  }

  await disconnect();
};
