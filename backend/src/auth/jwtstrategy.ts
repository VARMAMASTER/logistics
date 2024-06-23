import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service'; // Example AuthService

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '4dcc2aea-778e-4e55-9220-fabea4805212', // Replace with your actual secret key
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }; // Example validation logic
  }
  
}
