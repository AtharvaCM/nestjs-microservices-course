import { IsNotEmpty } from 'class-validator';
import JSON from 'graphql-type-json';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ExecuteJobInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field(() => JSON)
  @IsNotEmpty()
  data: object | object[];
}
