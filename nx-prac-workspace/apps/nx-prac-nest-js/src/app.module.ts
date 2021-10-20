import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { EventsGateway } from './test-gateway.gateway';

@Module({
  imports: [TestModule],
  providers: [EventsGateway]
})
export class AppModule {}
