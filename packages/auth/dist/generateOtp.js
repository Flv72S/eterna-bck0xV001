"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
const crypto_1 = require("crypto");
const db_1 = __importDefault(require("@eterna/db"));
async function generateOtp(userId) {
    const code = ('' + (0, crypto_1.randomInt)(100000, 999999));
    const expiresAt = new Date(Date.now() + 5 * 60000);
    await db_1.default.otps.create({
        data: {
            userId,
            code,
            expiresAt,
        }
    });
    return code;
}
