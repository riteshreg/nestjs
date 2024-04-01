import { Controller, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile(new ParseFilePipe({
        validators:[
            new MaxFileSizeValidator({
                maxSize:1000 * 300,
                message:"File Size cannot be greater than 300kb"
            })
        ]
    })) file:Express.Multer.File){
        return file.size
    }
}
