import { FrameworkType, ServerFramework } from '../core/interfaces/app';
import express from 'express';
import fastify from 'fastify';
import koa from 'koa';

export function chooseFramework(frameworkType: FrameworkType): ServerFramework {
  switch (frameworkType) {
    case 'express':
      return express();
    case 'koa':
      return new koa();
    case 'fastify':
      return fastify();
    default:
      return express();
  }
}
