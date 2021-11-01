import {Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {AWSRegionEnum, TestService} from "./test.service";
import {DateTime} from "luxon";

@Controller('test')
export class TestController {
  constructor(
    private readonly testservice:TestService
  ) {
  }
  @ApiTags("Test")
  @ApiOperation({summary:"테스트용 GET",description:"정상적으로 작동하는지 확인시켜줌"})
  @Get()
  TimeCheck() {
    let seconds = DateTime.now().setZone('Asia/Seoul').toSeconds()*1000;
    const timePlus = new Date(seconds).getTimezoneOffset()*-60*1000;
    console.log(timePlus)
    seconds = seconds+ timePlus;
    return new Date(seconds)
  }
  @Get('kst-utc')
  utcTime() {
    return this.testservice.kstToUtc();
  }
}
