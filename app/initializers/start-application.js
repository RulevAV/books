import ConsoleLogger from '../loggers/console-logger';

export function initialize(application) {
  application.register('logger:main', ConsoleLogger);
  application.inject('component', 'applicationLogger', 'logger:main');
  application.inject('controller', 'applicationLogger', 'logger:main');
  application.inject('route', 'applicationLogger', 'logger:main');
}

export default {
  initialize
};
