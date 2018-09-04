const productionApiURL = 'https://api.komfort124.ru';
const developmentApiURL = 'http://localhost:3000';
const testApiURL = 'http://127.0.0.1:3000';

const productionWebSocketURL = 'wss://api.komfort124.com';
const developmentWebSocketURL = 'ws://localhost:3000';
const testWebSocketURL = 'ws://127.0.0.1:3000';

class Environment {
  constructor () {
    this._development = 'development';
    this._production = 'production';
    this._test = 'testing';
  }
  get CurrentProject () {
    return process.env.VUE_APP_PROJECT;
  }
  get isDevelopment () {
    return process.env.NODE_ENV === this._development;
  }
  get isProduction () {
    return process.env.NODE_ENV === this._production;
  }
  get isTest () {
    return process.env.NODE_ENV === this._test;
  }
  get CurrentAPI () {
    return this.CurrentEnvironmentApi;
  }
  get CurrentWebSocket () {
    return this.CurrentEnvironmentWebSocket;
  }
  get CurrentEnvironmentApi () {
    switch (process.env.NODE_ENV) {
    case this._development:
      return developmentApiURL;
    case this._production:
      return productionApiURL;
    case this._test:
      return testApiURL;
    }
  }
  get CurrentEnvironmentWebSocket () {
    switch (process.env.NODE_ENV) {
    case this._development:
      return developmentWebSocketURL;
    case this._production:
      return productionWebSocketURL;
    case this._test:
      return testWebSocketURL;
    }
  }
}

const EnvironmentService = new Environment();

export default EnvironmentService;
