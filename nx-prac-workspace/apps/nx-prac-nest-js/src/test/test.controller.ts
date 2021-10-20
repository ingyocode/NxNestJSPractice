import {Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors, StreamableFile} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {TestService} from "./test.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {createReadStream} from "fs";
import * as es from 'event-stream'
import {join} from 'path';

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
  //10GB 이상의 파일에서 RangeError [ERR_INVALID_OPT_VALUE]: The value "10485760000" is invalid for option "size" 에러 발생. 해당 부분 수정하기.
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
  @Get('download')
  //send(): StreamableFile {
  send() {
    let count;
    const file = createReadStream(join(process.cwd(), 'test.mov'))
    file.on('data',function (data) {
      //res.write(data)
    })
    console.log(file)
    //return new StreamableFile(file);
  }
}
