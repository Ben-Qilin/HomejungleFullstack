import { Injectable, NotFoundException } from '@nestjs/common';
import { PlantDto } from 'src/auth/dto/plantDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException } from '@nestjs/common';
import { error } from 'console';
import { NewPlantDto } from 'src/auth/dto/newPlantDto';

@Injectable()
export class AdminService {
    async deletePlantById(plantid: number) {
        const plant = await this.prismaService.plant.findUnique({ where : {plantId : plantid}})
        if(!plant) throw new NotFoundException('Plant not found')
        await this.prismaService.plant.delete({ where: { plantId: plantid } })
        
    }
    async updatePlantById(plantid: number, newPlantData: NewPlantDto) {
        console.log(newPlantData)
        const { name_plant, water, sun, price, type, img } = newPlantData;
        const plant = await this.prismaService.plant.findUnique({ where: { plantId: plantid } });
        if (!plant) throw new NotFoundException('Plant not found');
         await this.prismaService.plant.update({
            where: { plantId: plantid },
            data: { name_plant, water, sun, price: parseFloat(price), type, img }
        });
        // return {data : 'modification pris en compte '}
    }
    async getPlantById(plantid: number) {
       
   
        console.log(plantid)
        const plant = await this.prismaService.plant.findUnique({ where : {plantId : plantid}});
        console.log(plant)
        if(!plant) throw new NotFoundException('plant not found');
        return plant
        
    }
    //! implementer la logique pour recuperer id et voir apres pour modifier le produit et mettre ajour la bdd :)


    constructor(private readonly prismaService: PrismaService) { }

    async createPlant(plantDto: PlantDto) {
        console.log(plantDto)
        const { name_plant, water, sun, price, type, img } = plantDto;
        const plant = await this.prismaService.plant.findUnique({ where: { name_plant } })

        if (plant) throw new ConflictException('Plant already created')
        await this.prismaService.plant.create({ data: { name_plant, water, sun, price: parseFloat(price), type, img } })
        return { data: 'plant created with success' }
    }
    async getAllPlants() {
        const plants = await this.prismaService.plant.findMany()

        if (!plants) throw new NotFoundException('No plants created')

        return plants;
    }


}
