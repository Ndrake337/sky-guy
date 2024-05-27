import { IsNotEmpty, IsString, Length } from 'class-validator';

export class createUserBody {
  @IsString()
  @Length(4, 20)
  userName: string;

  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(8, 12)
  password: string;

  @IsString()
  role: 'admin' | 'editor' | 'author' | 'regular';

  @IsString()
  status: 'active' | 'inactive';

  about?: string;
}
