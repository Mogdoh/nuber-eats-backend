import { ArgsType, Field, InputType } from '@nestjs/graphql/dist';
import { IsBoolean, IsString, Length } from 'class-validator';
@ArgsType()
export class CreateRestaurantDto {
  @Field((tpye) => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((tpye) => Boolean)
  @IsBoolean()
  isVegan: string;

  @Field((tpye) => String)
  @IsString()
  address: string;

  @Field((tpye) => String)
  @IsString()
  ownerName: string;
}
