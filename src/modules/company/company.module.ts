import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
