import { SetMetadata } from '@nestjs/common';
// import  from '@nestjs/core'

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

