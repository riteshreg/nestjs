import { Global, Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin';
import { CatMoudle } from 'src/cat/cat.module';

@Global()
@Module({
    imports:[CatMoudle],
    controllers:[AdminController],
    providers:[AdminService]
})
export class AdminModule {}
