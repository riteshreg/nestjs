import { HttpException, HttpStatus } from "@nestjs/common";


export class ForbiddenExpection extends HttpException{
    constructor(){
        super('Forbidden', HttpStatus.FORBIDDEN)
    }
}