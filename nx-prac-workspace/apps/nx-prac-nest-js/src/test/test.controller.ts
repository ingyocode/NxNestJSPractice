import {Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {TestService} from "./test.service";

@Controller('test')
export class TestController {
  constructor(
    private readonly testservice:TestService
  ) {
  }
  @ApiTags("Test")
  @ApiOperation({summary:"테스트용 GET",description:"정상적으로 작동하는지 확인시켜줌"})
  @Get()
  testGet() {
    return this.testservice.testMethod()
  }
}
