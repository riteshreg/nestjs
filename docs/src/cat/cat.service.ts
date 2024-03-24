import { Injectable } from '@nestjs/common';
import { Cat } from 'interface/cats.interface';
// import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat:Cat){
        this.cats.push(cat)
    }

    findAll(){
        return this.cats;
    }
}
