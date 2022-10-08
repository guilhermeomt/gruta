import { Action } from '../interfaces/action';

export class Project {
  name!: string;
  directory!: string;
  actions = new Map<string, Action>();

  constructor(name: string, directory?: string) {
    this.name = name;
    if (directory) this.directory = directory;
  }
}
