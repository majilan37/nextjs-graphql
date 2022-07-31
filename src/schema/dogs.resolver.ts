import { ApolloError } from "apollo-server-micro";
import { Arg, Query, Resolver } from "type-graphql";
import { Dog } from "./dogs";
import dogs from "./dogs.json";

@Resolver(Dog)
export class DogsResolver {
  @Query(() => Dog, { nullable: true })
  dog(@Arg("name", () => String) name: string): Dog | undefined {
    const dog = dogs.find((dog) => dog.name === name);

    if (!dog) {
      throw new ApolloError("dog not found");
    }

    return dog;
  }

  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs;
  }
}
