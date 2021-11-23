import { Injectable } from '@nestjs/common';
import {Iamport,Request} from 'iamport-rest-client-nodejs'

const {Banks} = Request;



@Injectable()
export class TestService {

  public iamport = new Iamport({
    apiKey:'imp_apikey',
    apiSecret: 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f'
  });
  testing() {
    const getBanks = Banks.getBanks();
    getBanks.request(this.iamport).then(res => console.log(res.data)).catch(err => console.log(err.response.data))
  }

}
