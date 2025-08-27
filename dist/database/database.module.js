"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../users/user.model");
const equipment_model_1 = require("../equipments/equipment.model");
const activity_model_1 = require("../activities/activity.model");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'yvart',
                password: '1234',
                database: 'techmed',
                models: [user_model_1.User, equipment_model_1.Equipment, activity_model_1.Activity],
                autoLoadModels: true,
                synchronize: true,
                logging: false,
            }),
        ],
    })
], DatabaseModule);
