import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginInput } from '../dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller({
  path: '/auth',
  version: '1',
})
export class AuthControllerV1 {
  @ApiBody({
    type: LoginInput,
  })
  @ApiResponse({
    status: 200,
    schema: {
      title: 'username',
      type: 'string',
    },
  })
  @Post()
  login(@Body() input: LoginInput) {
    const user = {
      username: 'kishankumar',
      password: 'Kishan@_5225',
    };
    if (input.username != user.username)
      throw new HttpException('User does not match', HttpStatus.NOT_FOUND);
    if (input.password != user.password)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    return user;
  }
}
