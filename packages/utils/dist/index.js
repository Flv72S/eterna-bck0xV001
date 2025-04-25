"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhoneNumber = exports.validateEmail = void 0;
exports.generateSerialCode = generateSerialCode;
var validateEmail = function (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.validateEmail = validateEmail;
var formatPhoneNumber = function (phone) {
    // Rimuove tutti i caratteri non numerici
    var cleaned = phone.replace(/\D/g, '');
    // Formatta il numero come +39 XXX XXX XXXX
    if (cleaned.length === 10) {
        return "+39 ".concat(cleaned.slice(0, 3), " ").concat(cleaned.slice(3, 6), " ").concat(cleaned.slice(6));
    }
    return phone;
};
exports.formatPhoneNumber = formatPhoneNumber;
function generateSerialCode() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}
