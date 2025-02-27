import { Field, ObjectType } from '@nestjs/graphql/dist';

@ObjectType()
export class Restaurant {
  @Field((is) => String)
  name: string;
}
