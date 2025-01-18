import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class LoginInput {
  @ApiProperty()
  @IsNotEmpty({
    message: 'username is required',
  })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/, {
    message:
      'password should have at least 5 characters and one letter and number',
  })
  password: string;
}
