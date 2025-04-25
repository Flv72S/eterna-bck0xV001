import { prisma } from "../config/prisma";
import { generateOtp, getExpiration } from "../utils/otp";

export const createOtpForUser = async (userId: string): Promise<string> => {
  const code = generateOtp();
  await prisma.otp.create({
    data: {
      userId,
      code,
      expiresAt: getExpiration(),
    },
  });
  return code;
};

export const validateOtp = async (userId: string, code: string): Promise<boolean> => {
  const otp = await prisma.otp.findFirst({
    where: { userId, code, used: false },
  });
  
  if (!otp || new Date() > otp.expiresAt) return false;

  await prisma.otp.update({
    where: { id: otp.id },
    data: { used: true }
  });
  
  return true;
}; 