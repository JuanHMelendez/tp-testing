import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {
    getGreeting(): string {
        return 'Greetings from Service2!';
      }
    
      resta(a: number, b: number): number {
        return a - b;
      }
    
      division(a: number, b: number): number {
        if (b === 0) {
          throw new Error('Division por 0');
        }
        return a / b;
      }
}
