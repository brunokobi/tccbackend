"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
require("./database");
var cors_1 = __importDefault(require("cors"));
var upload_1 = __importDefault(require("./config/upload"));
dotenv_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(index_1.default);
app.listen(3333, function () {
    console.log('🚀 Servidor iniciado');
});
