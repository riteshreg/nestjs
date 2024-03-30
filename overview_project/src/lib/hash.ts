import * as bcrypt from 'bcrypt';

const saltRound = 10;

export async function generateHash(password: string) {
  return await bcrypt.hash(password, saltRound);
}

export async function compareHash(plainPassword: string, hashPassword: string) {
  return await bcrypt.compare(plainPassword, hashPassword);
}
