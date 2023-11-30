import { IsNotEmpty } from 'class-validator';

export class NewPlantDto {
  
  @IsNotEmpty()
  readonly name_plant: string;

  @IsNotEmpty()
  readonly img: string;

  @IsNotEmpty()
  readonly water: string;

  @IsNotEmpty()
  readonly sun: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly price: string;
}