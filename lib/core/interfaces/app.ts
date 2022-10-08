import express from 'express';
import koa from 'koa';
import { FastifyInstance } from 'fastify';

export type ServerFramework = express.Application | koa | FastifyInstance;
export type FrameworkType = 'express' | 'koa' | 'fastify';

export interface App {
  server: ServerFramework;
  createNewServer: (framework: FrameworkType) => ServerFramework;
  listen: (port: number, cb: () => Promise<void>) => Promise<void>;
}
