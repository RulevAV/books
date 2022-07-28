'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': false
    }
  });

  app.import("vendor/css/styles.css");

  const bootstrapjquery = funnel("vendor", {
    include: ["jquery-3.5.1.slim.min.js"],
    destDir: "bootstrap/js"
  });

  const jqueryFiles = funnel("node_modules/blueimp-file-upload/js", {
    include: ["**/*.js"],
    destDir: "js"
  });

  const bootstrapjs = funnel("node_modules/bootstrap/dist/js", {
    include: ["*"],
    destDir: "bootstrap/js"
  });

  const bootstrapcss = funnel("node_modules/bootstrap/dist/css", {
    include: ["*"],
    destDir: "bootstrap/css"
  });

  const css = funnel("vendor/css", {
    include: ["*"],
    destDir: "css"
  });

  const js = funnel("vendor/js", {
    include: ["*"],
    destDir: "js"
  });

  return app.toTree([jqueryFiles, bootstrapjs, bootstrapcss, bootstrapjquery, css, js]);
};
