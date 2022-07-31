import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class DogAttribute {
  @Field(() => ID)
  key: string;

  @Field(() => String)
  value: string;
}

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string;

  @Field(() => [DogAttribute])
  attributes: DogAttribute[];

  @Field(() => [String])
  description: string[];

  @Field(() => String)
  image: string;

  @Field(() => Number)
  ageInWeeks: number;

  @Field(() => String)
  sex: string;

  @Field(() => String)
  breed: string;

  @Field(() => String)
  color: string;

  @Field(() => Number)
  fee: number;

  @Field(() => String)
  weight: number;

  @Field(() => String)
  availableDate: string;
}
