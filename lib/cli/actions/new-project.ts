import { Project } from '../models/project';
import { Action } from '../interfaces/action';
import inquirer from 'inquirer';

export class NewProjectAction implements Action {
  project = new Project('gruta-project');

  constructor(name: string, directory?: string) {
    this.project.name = name;
    if (directory) this.project.directory = directory;
  }

  async run() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project?',
          default: this.project.name,
        },
        {
          type: 'input',
          name: 'app',
          message: 'What is the name of the first app? (example: users)',
        },
        {
          type: 'list',
          name: 'framework',
          message: 'What framework do you want to use for this first api?',
          choices: ['Express', 'Koa', 'Fastify'],
        },
        {
          type: 'list',
          name: 'orm',
          message: 'What ORM do you want to use for this first api?',
          choices: ['Prisma', 'Sequelize', 'TypeORM', 'Mongoose'],
        },
      ])
      .then((answers) => {
        console.log(answers);
      });
  }

  async createProject() {
    console.log(this.project);
  }
}
