import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class PlantsService {
    constructor(private readonly prismaService: PrismaService) { }
    async findAll() {
        const plants = await this.prismaService.plant.findMany()
        if(!plants) throw new NotFoundException('Plants not found')
        return plants;
    }
}
