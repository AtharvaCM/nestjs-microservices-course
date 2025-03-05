import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';

import { FibonacciJob } from './fibonacci.job';
import { JobsService } from './jobs.service';

@Module({
  imports: [DiscoveryModule],
  providers: [FibonacciJob, JobsService],
})
export class JobsModule {}
