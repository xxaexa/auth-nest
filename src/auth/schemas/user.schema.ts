import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
  
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  displayName: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: string;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: string;

  @Prop()
  weight: string;

  @Prop()
  interest: string;
}

export const UserSchema = SchemaFactory.createForClass(User);