class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;

    if(this.database.options.logging) {
      this.database.options.logging = logger.info.bind(logger);
    }
  }

  start() {
    return Promise.resolve()
      .then(() => this.database.authenticate())
      .then(() => this.server.start());
  }
}

module.exports = Application;
