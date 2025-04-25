export const generateOtp = (): string => {
  return String(Math.floor(100000 + Math.random() * 900000));
};

export const getExpiration = (): Date => {
  const minutes = parseInt(process.env.OTP_EXPIRATION_MINUTES || '5');
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now;
}; 