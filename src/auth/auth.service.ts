import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.user.dto';

@Injectable()
export class AuthService {
  register(registerUserDto: RegisterUserDto) {
    console.log('registerUserDto : ', registerUserDto);

    return `User register successfully.`;
  }

  login() {
    return `User logged in successfully.`;
  }
}
