import { prisma } from "@/db";
/**
 * gets all of the available users
 * should be a private function
 * @date 6/10/2023 - 12:52:23 PM
 * @author Gottfried Kleinberger
 *
 * @async
 * @returns {Promise}
 */
export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (err) {
    console.log(err);
    return { err };
  }
}

/**
 * Insert new user into the database
 * @date 6/10/2023 - 12:51:42 PM
 * @author Gottfried Kleinberger
 *
 * @async
 * @param {Object} user { name, email, imageUrl }
 * @returns {Promise}
 */
export async function createUser(user: {
  name: string;
  email: string;
  imageUrl: string;
}) {
  try {
    const users = await prisma.user.create({ data: user });
    return { users };
  } catch (err) {
    console.log(err);
    return { err };
  }
}

/**
 * find a unique user
 * @date 6/10/2023 - 1:04:43 PM
 * @author Gottfried Kleinberger
 *
 * @async
 * @param {string} id the users ID
 * @returns {Promise}
 */
export async function findUser(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user };
  } catch (err) {
    console.log(err);
    return { err };
  }
}
