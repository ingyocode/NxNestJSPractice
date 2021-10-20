/*
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'ws';
import {FileInterceptor} from "@nestjs/platform-express";
import {Body, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import * as fs from 'fs'

@WebSocketGateway(8080)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('test')
  testMessage(client:any, data, @Body() body) {
    client.broadcast.emit('test',data)
    console.log(body)
    console.log(client);
    return data;
  }

  @SubscribeMessage('file')
  @UseInterceptors(FileInterceptor('file'))
  handleEvent(@UploadedFile() file: any) {
    console.log(file)
    this.server.emit('message',file)
    return 'file sent';
  }

  @SubscribeMessage('events')
  onEvent() {
    return 'Service is started';
  }

 */

  import {
  MessageBody, OnGatewayConnection, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import {FileInterceptor} from "@nestjs/platform-express";
import {Body,UploadedFile, UseInterceptors} from "@nestjs/common";
import {Server} from "socket.io";

@WebSocketGateway(8080)
export class EventsGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer()
  server:Server



  @SubscribeMessage('test')
  testMessage(client:any, data:unknown, @Body() body):WsResponse<unknown> {
    console.log(body)
    console.log(data);
    const event = 'test';
    const returnValue = 'asdf'
    return {event, data};
  }

  @SubscribeMessage('file')
  handleEvent(@MessageBody() data, @UploadedFile() file):WsResponse<unknown> {
    console.log('data: '+data)
    return
  }

  @SubscribeMessage('events')
  onEvent() {
    return 'Service is started';
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log(args)
  }

  afterInit(server: any): any {
    console.log(server)
  }

  sendAll(msg:string) {
    this.server.emit('alertTo', {'msg':msg})
  }
}
