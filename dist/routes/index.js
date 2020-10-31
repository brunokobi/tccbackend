"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var alunos_routes_1 = __importDefault(require("./alunos.routes"));
var registros_routes_1 = __importDefault(require("./registros.routes"));
var usuarios_routes_1 = __importDefault(require("./usuarios.routes"));
var autenticacao_routes_1 = __importDefault(require("./autenticacao.routes"));
var routes = express_1.Router();
routes.use('/alunos', alunos_routes_1.default);
routes.use('/registros', registros_routes_1.default);
routes.use('/usuarios', usuarios_routes_1.default);
routes.use('/autenticacao', autenticacao_routes_1.default);
exports.default = routes;
