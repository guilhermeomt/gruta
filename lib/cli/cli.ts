import { program } from 'commander';
import { NewProjectAction } from './actions/new-project';

program
  .name('gruta')
  .version('0.1.0')
  .command('new')
  .argument('<name>', 'Create a new Gruta project')
  .option(
    '-d, --output <directory>',
    'Specify a directory to create the project in',
  )
  .action((name: string, options: { output: string }) => {
    new NewProjectAction(name, options.output).run();
  });

program
  .command('generate')
  .argument('<component>', 'Generate a new Gruta component')
  .option(
    '-d, --output <directory>',
    'Specify a directory to create the component in',
  )
  .action((name: string, options: { output: string }) => {
    console.log(name, options);
  });

program.parse(process.argv);
