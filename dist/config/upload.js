"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var tmpFolder = path_1.default.resolve(__dirname, '..', '..', 'temp');
exports.default = {
    directory: tmpFolder,
    storage: multer_1.default.diskStorage({
        destination: tmpFolder,
        filename: function (request, file, callback) {
            var _a = request.body, matricula = _a.matricula, nome = _a.nome;
            var fileName = "" + matricula + '.jpg';
            return callback(null, fileName);
        }
    }),
};
