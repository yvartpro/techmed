"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const equipment_model_1 = require("./equipment.model");
let EquipmentsService = class EquipmentsService {
    constructor(equipmentModel) {
        this.equipmentModel = equipmentModel;
    }
    create(data) {
        return this.equipmentModel.create(data); // cast DTO to any to satisfy Sequelize
    }
    findAll() {
        return this.equipmentModel.findAll();
    }
    findOne(id) {
        return this.equipmentModel.findByPk(id);
    }
    update(id, data) {
        return this.equipmentModel.update(data, { where: { id } });
    }
    remove(id) {
        return this.equipmentModel.destroy({ where: { id } });
    }
};
exports.EquipmentsService = EquipmentsService;
exports.EquipmentsService = EquipmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(equipment_model_1.Equipment)),
    __metadata("design:paramtypes", [Object])
], EquipmentsService);
