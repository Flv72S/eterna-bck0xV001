"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("@eterna/db"));
async function login(email, pin) {
    const user = await db_1.default.users.findUnique({ where: { email } });
    if (!user || user.pin !== pin)
        return null;
    const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    await db_1.default.sessions.create({
        data: {
            userId: user.id,
            token,
            expiresAt: new Date(Date.now() + 3600000)
        }
    });
    return token;
}
