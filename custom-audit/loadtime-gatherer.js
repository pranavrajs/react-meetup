const Gatherer = require('lighthouse').Gatherer;

class LoadTime extends Gatherer {
  afterPass(options) {
    const driver = options.driver;

    return driver.evaluateAsync('window.loadTimeMetrics')
      // Ensure returned value is what we expect.
      .then(loadTimeMetrics => {
        if (!loadTimeMetrics || loadTimeMetrics.componentMountTime === undefined) {
          throw new Error('Unable to find load metrics in page');
        }
        return loadTimeMetrics;
      });
  }
}

module.exports = LoadTime;