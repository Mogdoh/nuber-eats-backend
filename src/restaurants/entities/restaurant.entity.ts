import { Field, ObjectType } from '@nestjs/graphql/dist';

@ObjectType()
export class Restaurant {
  @Field((type) => String)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  isGood: boolean;
}
