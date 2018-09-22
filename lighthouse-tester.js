const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const args = require('yargs').argv;

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr)
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects', '--headless']
};

// Usage:
launchChromeAndRunLighthouse(args.url, opts).then(results => {
  console.log(`Performance Score : ${results.categories.performance.score}`)
});