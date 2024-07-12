import { Test, TestingModule } from '@nestjs/testing';
import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1Service],
    }).compile();

    service = module.get<Service1Service>(Service1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Hola servicio 1 !"', () => {
    expect(service.getHello()).toBe('Hola servicio 1 !');
  });

  it('should add two numbers', () => {
    expect(service.suma(1, 2)).toBe(3);
  });

  it('should multiply two numbers', () => {
    expect(service.multiplicacion(2, 3)).toBe(6);
  });
});
