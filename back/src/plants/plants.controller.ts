import { Controller, Get } from '@nestjs/common';
import {PlantsService} from "./plants.service";

@Controller('plants')
export class PlantsController {
    constructor(private readonly plantsService: PlantsService) {
    }
    @Get('all')
    async findAll() {
       return this.plantsService.findAll()
    }
}
