import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  testMethod() {
    return "Success To Test"
  }
}
