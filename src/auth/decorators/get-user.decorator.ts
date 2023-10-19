import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    //ctx: contexto de la aplicación de Nest
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    if (!user)
      throw new InternalServerErrorException('User not found in (request)');

    if (!data) return user;

    if (!user[data])
      throw new InternalServerErrorException('Parameter not exist');

    return user[data];
  },
);
