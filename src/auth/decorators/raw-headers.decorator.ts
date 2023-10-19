import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    //ctx: contexto de la aplicación de Nest
    const req = ctx.switchToHttp().getRequest();

    return req.rawHeaders;
  },
);
