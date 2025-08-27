"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const equipment_model_1 = require("./equipment.model");
const equipments_service_1 = require("./equipments.service");
const equipments_controller_1 = require("./equipments.controller");
let EquipmentsModule = class EquipmentsModule {
};
exports.EquipmentsModule = EquipmentsModule;
exports.EquipmentsModule = EquipmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([equipment_model_1.Equipment])],
        providers: [equipments_service_1.EquipmentsService],
        controllers: [equipments_controller_1.EquipmentsController],
    })
], EquipmentsModule);
