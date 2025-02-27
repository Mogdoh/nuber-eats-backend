import { Query, Resolver } from '@nestjs/graphql/dist';

@Resolver()
export class RestaurantsResolver {
  @Query(() => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }
}
