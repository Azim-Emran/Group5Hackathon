import bcrypt from 'bcryptjs';

export const hashPwd =  async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
