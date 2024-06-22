import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export type UserDocument = User & Document;

@Schema({collection: "user"})
export class User {
  @Prop({ unique: true })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  id: string;


  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
