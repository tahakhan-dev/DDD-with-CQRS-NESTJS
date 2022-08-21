import {
  Controller,
  Post,
  HttpStatus,
  Res,
  Body,
  Get,
  Query,
} from '@nestjs/common';
import { AccountService } from './Account.service';
import { StatusCodes } from '../../common/enums/status-codes';
import { Response } from 'express';
import { AccountDto } from './dto/Account.dto';
import { GetAccountDto } from './dto/getAccount.dto';

@Controller('account')
export class AccountController {
  constructor(
    private readonly service: AccountService,
  ) { }

  @Post('/create')
  async createAccount(@Res() response: Response, @Body() AccountPayload: AccountDto): Promise<any> {
    try {
      let data = await this.service.CreateAccountServiceHandler(AccountPayload);
      console.log(data);
      
      response.status(data.isAccountCreate ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR)
        .send({
          StatusCode: data.isAccountCreate == true ? StatusCodes.Success : StatusCodes.Exception,
          Result: data.isAccountCreate == true ? [] : null,
          Message: data.isAccountCreate == true ? 'Account Created' : data.message,
        });
    } catch (error) {
      console.log(error);
      
      response
        .status(error ? error.status : HttpStatus.INTERNAL_SERVER_ERROR)
        .send({
          StatusCode: error ? error.status : StatusCodes.Exception,
          Result: null,
          Message: error.response.error,
        });
    }
    return response;
  }

  @Get('/get')
  async getAccount(@Res() response: Response, @Query() payload: GetAccountDto): Promise<any> {
    try {
      let data = await this.service.getAccountServiceHandler(payload);
      console.log(data);
      
      response.status(HttpStatus.OK)
        .send({
          StatusCode: StatusCodes.Success,
          Result: data,
          Message: 'AccountFound',
        });
    } catch (error) {
      console.log(error);
      response
        .status(error ? error.status : HttpStatus.INTERNAL_SERVER_ERROR)
        .send({
          StatusCode: error ? error.status : StatusCodes.Exception,
          Result: null,
          Message: error.response.error,
        });
    }
    return response;
  }
}
