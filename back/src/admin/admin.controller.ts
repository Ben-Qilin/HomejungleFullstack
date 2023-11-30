
import { Controller, Get, Render, Post, Body, Redirect, Param, Res, Delete } from '@nestjs/common';
import { PlantDto } from 'src/auth/dto/plantDto';
import { AdminService } from './admin.service';
import { NewPlantDto } from 'src/auth/dto/newPlantDto';


@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }
    // @Get()
    @Post("add-plant")
    @Redirect('http://localhost:3001/admin')
    async createPlant(@Body() plantDto: PlantDto) {
        await this.adminService.createPlant(plantDto);
    }

    @Post('delete-plant/:plantId')
    async deletePlantById(@Param('plantId') plantId: string) {
        const plantid = parseInt(plantId, 10)
        await this.adminService.deletePlantById(plantid)
    }

    @Get('edit-plant/:plantId')
    @Render('editPlant.hbs')
    async editPlant(@Param('plantId') plantId: string) {
        const plantid = parseInt(plantId, 10)
        return await this.adminService.getPlantById(plantid);
    }

    // @Post('update-plant/:plantId')
    @Post('edit-plant/:plantId')
    
    async updatePlant(@Param('plantId') plantId: string, @Body() newPlantData: NewPlantDto) {
        const plantid = parseInt(plantId, 10)
        await this.adminService.updatePlantById(plantid, newPlantData);
        
    }

    @Get()
    @Render('index.hbs')
    async root() {
        const plants = await this.adminService.getAllPlants();
        return { plants }

    }
}
