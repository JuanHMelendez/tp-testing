import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Service1Service } from './service1/service1.service';
import { Service2Service } from './service2/service2.service';
import { Controller1Controller } from './controller1/controller1.controller';
import { Controller2Controller } from './controller2/controller2.controller';

@Module({
  imports: [],
  controllers: [AppController, Controller1Controller, Controller2Controller],
  providers: [AppService, Service1Service, Service2Service],
})
export class AppModule {}
