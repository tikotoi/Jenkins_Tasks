export const config = {
  runner: "local",
  specs: ["../test/specs/**/*.js"],
  maxInstances: 2,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["headless", "disable-gpu"],
      },
    },
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost:8080",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "geckodriver"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    retries: 2,
  },
  before: function (capabilities, specs) {
    browser.setWindowSize(1920, 1080);
  },
};
