import { ArgsType, Field, InputType } from '@nestjs/graphql/dist';

@ArgsType()
export class CreateRestaurantDto {
  @Field((tpye) => String)
  name: string;
  @Field((tpye) => Boolean)
  isVegan: string;
  @Field((tpye) => String)
  address: string;
  @Field((tpye) => String)
  ownerName: string;
}
