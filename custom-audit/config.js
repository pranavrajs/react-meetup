module.exports = {
  // 1. Run your custom tests along with all the default Lighthouse tests.
  extends: 'lighthouse:default',

  // 2. Add gatherer to the default Lighthouse load ('pass') of the page.
  passes: [{
    passName: 'defaultPass',
    gatherers: [
      'loadtime-gatherer',
    ],
  }],

  // 3. Add custom audit to the list of audits 'lighthouse:default' will run.
  audits: [
    'loadtime-audit',
  ],

  // 4. Create a new 'LOAD TIME METRICS' section in the default report for our results.
  categories: {
    loadTimeMetrics: {
      title: 'Load Time Metrics',
      description: 'Metrics to find out the load time',
      auditRefs: [
        // When we add more custom audits, `weight` controls how they're averaged together.
        {id: 'loadtime-audit', weight: 1},
      ],
    },
  },
};