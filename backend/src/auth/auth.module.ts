import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/schemas/schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwtstrategy';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),  PassportModule.register({ defaultStrategy: 'jwt' }),  JwtModule.register({
    secret: '4dcc2aea-778e-4e55-9220-fabea4805212', 
    signOptions: { expiresIn: '1h' }, 
  })],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
