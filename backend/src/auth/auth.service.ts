import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/schema';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel:Model<User>, private readonly jwtService: JwtService, ){}

  private generateJwtToken(user): string {
    const { _id } = user;
    const payload = { id: _id };
    return this.jwtService.sign(payload);
  }
  
  async create(createUserDto: CreateAuthDto): Promise<{ user: User; token: string }> {
    const createdUser = new this.userModel(createUserDto);
    try {
      const savedUser = await createdUser.save();

      // Generate JWT token upon successful user creation
      const token = this.generateJwtToken(savedUser);

      return { user: savedUser, token };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException("Email already exists");
      } else {
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}



