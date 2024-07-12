import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
    getHello(): string {
        return 'Hola servicio 1 !';
      }
    
      suma (a: number, b: number): number {
        return a + b;
      }
    
      multiplicacion (a: number, b: number): number {
        return a * b;
      }
}
