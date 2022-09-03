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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_brand_dto_1 = require("./create-brand.dto");
class UpdateBrandDto extends (0, swagger_1.OmitType)(create_brand_dto_1.CreateBrandDto, ['files']) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true' }),
    (0, class_validator_1.IsBoolean)({ message: 'El estado no es válido' }),
    __metadata("design:type", Boolean)
], UpdateBrandDto.prototype, "status", void 0);
exports.UpdateBrandDto = UpdateBrandDto;
//# sourceMappingURL=update-brand.dto.js.map