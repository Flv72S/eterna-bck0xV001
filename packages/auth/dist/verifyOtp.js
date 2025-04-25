"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = verifyOtp;
const db_1 = __importDefault(require("@eterna/db"));
async function verifyOtp(userId, inputCode) {
    const otp = await db_1.default.otps.findFirst({
        where: {
            userId,
            code: inputCode,
            used: false
        }
    });
    if (!otp || new Date(otp.expiresAt) < new Date())
        return false;
    await db_1.default.otps.update({
        where: { id: otp.id },
        data: { used: true }
    });
    return true;
}
