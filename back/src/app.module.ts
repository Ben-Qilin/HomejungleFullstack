import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { PlantsController } from './plants/plants.controller';
import { PlantsService } from './plants/plants.service';


@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}), AuthModule, PrismaModule, MailerModule],
  controllers: [AdminController, PlantsController],
  providers: [AdminService, PlantsService],
})
export class AppModule {}
