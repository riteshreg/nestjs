import { ExecutionContext, createParamDecorator } from "@nestjs/common";


export const Hello = createParamDecorator((data:unknown, ctx:ExecutionContext)=>{
    console.log(data);
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['authorization'].replace('Bearer ', '')
    return token;
})