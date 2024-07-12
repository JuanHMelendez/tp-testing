import { Test, TestingModule } from '@nestjs/testing';
import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  let service: Service2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2Service],
    }).compile();

    service = module.get<Service2Service>(Service2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Greetings from Service2!"', () => {
    expect(service.getGreeting()).toBe('Greetings from Service2!');
  });

  it('should subtract two numbers', () => {
    expect(service.resta(5, 3)).toBe(2);
  });

  it('should divide two numbers', () => {
    expect(service.division(6, 2)).toBe(3);
  });

  it('deberia mostrarse cuando se divide por 0', () => {
    expect(() => service.division(6, 0)).toThrow('Division por 0');
  });
});

