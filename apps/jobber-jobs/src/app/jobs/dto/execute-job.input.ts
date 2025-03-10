import { IsNotEmpty } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ExecuteJobInput {
  @Field()
  @IsNotEmpty()
  name: string;
}
