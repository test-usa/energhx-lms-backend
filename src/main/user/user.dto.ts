import {
  IsString,
  IsEmail,
  Length,
  Matches,
  IsOptional,
  IsInt,
  IsEnum,
} from 'class-validator';
import { Gender, UserRole } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(2, 50)
  firstName: string;

  @IsString()
  @Length(2, 50)
  lastName: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  otherName?: string;

  @IsEnum(Gender)
  sex: Gender;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  profile_photo?: string;

  @IsInt()
  streetNumber: number;

  @IsString()
  street: string;

  @IsInt()
  postalCode: number;

  @IsString()
  city: string;

  @IsString()
  countryId: string;

  @IsString()
  stateId: string;

  @IsEnum(UserRole)
  userType: UserRole;
}

export class CreatePasswordDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 30)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,30}$/, {
    message:
      'Password must be between 6 to 30 characters long and include at least one uppercase letter, one lowercase letter, and one number.',
  })
  password: string;
}
