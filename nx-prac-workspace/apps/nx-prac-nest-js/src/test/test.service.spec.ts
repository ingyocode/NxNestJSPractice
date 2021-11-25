import {Test, TestingModule} from "@nestjs/testing";
import {TestService} from "./test.service";

describe('TestService', () => {
  let testService:TestService;
  beforeEach(async () => {

    const module:TestingModule = await Test.createTestingModule({
      providers:[TestService]
    }).compile();
    testService = module.get<TestService>(TestService);

  });
  describe('test',() => {
    it('TestService', () => {
      const result = testService.testing();
      expect(result).not.toBe(null)
    })
  })
})
