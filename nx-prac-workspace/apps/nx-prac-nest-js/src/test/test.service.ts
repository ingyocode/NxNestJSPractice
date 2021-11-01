import { Injectable } from '@nestjs/common';
import {DateTime, Settings} from "luxon";

@Injectable()
export class TestService {
  kstToUtc() {
    let date = DateTime.now().toUTC(); //utc Time
    date = date.toUTC()
    return date;
  }
  utcToKst() {
    /*
    let date = DateTime.now().toUTC(); // utc time
    date = date.plus({hours:9})

     */
  }
  changeTime(region: AWSRegionEnum, time: DateTime) {
    if (region == 0) {
      return time.setZone('UTC').toISO();
    } else if (region == 1) {
      return time.setZone('America/Los_Angeles').toISO();
    } else {
      return '!';
    }
  }

}
export enum AWSRegionEnum {
  AP_NORTHEAST_2 ,
  US_NORTHWEST_1
}
