'use strict';

define('books/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('abilities/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/book.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n22:50 - \'query\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('adapters/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-file.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-file.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-tags.js should pass ESLint\n\n');
  });

  QUnit.test('components/input/input-datepicker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input/input-datepicker.js should pass ESLint\n\n');
  });

  QUnit.test('components/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting/meeting-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting/meeting-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting/meeting-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/meeting/meeting-form.js should pass ESLint\n\n4:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:12 - \'Ember\' is not defined. (no-undef)\n7:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('components/modal-window/confirm.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-window/confirm.js should pass ESLint\n\n');
  });

  QUnit.test('components/register-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/register-form.js should pass ESLint\n\n2:10 - \'get\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/report/report-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/report/report-card.js should pass ESLint\n\n7:8 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/report/report-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/report/report-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/report/report-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/report/report-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-form.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n4:20 - \'computed\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/create-meeting.js should pass ESLint\n\n6:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:12 - \'Ember\' is not defined. (no-undef)\n11:19 - \'applicationLogger\' is assigned a value but never used. (no-unused-vars)\n24:56 - \'reject\' is defined but never used. (no-unused-vars)\n25:25 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/create-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-meeting.js should pass ESLint\n\n6:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:12 - \'Ember\' is not defined. (no-undef)\n18:56 - \'reject\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n21:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/meetings.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n19:22 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/env.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/env.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/start-application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/start-application.js should pass ESLint\n\n');
  });

  QUnit.test('instance-initializers/start-application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/start-application.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('loggers/console-logger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'loggers/console-logger.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('models/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/image.js should pass ESLint\n\n');
  });

  QUnit.test('models/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('models/report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/report.js should pass ESLint\n\n');
  });

  QUnit.test('models/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/books.js should pass ESLint\n\n2:8 - \'AuthenticatedRouteMixin\' is defined but never used. (no-unused-vars)\n20:31 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/create-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-meeting.js should pass ESLint\n\n7:15 - \'meeting\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/create-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/meetings.js should pass ESLint\n\n3:8 - \'AuthenticatedRouteMixin\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register.js should pass ESLint\n\n13:46 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/speakers.js should pass ESLint\n\n2:8 - \'AuthenticatedRouteMixin\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n12:20 - \'hash\' is defined but never used. (no-unused-vars)\n16:38 - \'method\' is defined but never used. (no-unused-vars)\n24:46 - \'relationshipHash\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/book.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/image.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/report.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/report.js should pass ESLint\n\n13:5 - Unexpected console statement. (no-console)\n17:46 - \'relationshipHash\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('services/current-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data.js should pass ESLint\n\n');
  });

  QUnit.test('services/logger-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/logger-error.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date-string.js should pass ESLint\n\n');
  });
});
define('books/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('books/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('books/tests/integration/components/book-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | book-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "v1p4GAid",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-card\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "vxxAXJtA",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/book-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | book-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "uGOy+6PC",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "044e3rT8",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/datepicker/input-datepicker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | datepicker/input-datepicker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "hUckW9ft",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"datepicker/input-datepicker\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "kg7RAWkQ",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"datepicker/input-datepicker\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/input-file-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input-file', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "HRHfMtVN",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-file\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "PSub7kSw",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-file\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/input-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "jx2CQ+gn",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "GnNXYKZM",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/input/input-datepicker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input/input-datepicker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "Y1UTKQxs",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input/input-datepicker\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "GrfIIHQZ",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input/input-datepicker\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/login-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "WCm5jH4F",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"login-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "QnYGFQE0",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"login-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "znrnA32/",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-card\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "YbWQHfI4",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-card/report-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-card/report', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "1ZbBMjC/",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-card/report\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "5JhB4Xt5",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-card/report\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "1Tge71cH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+SgN9C3i",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-form/report-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-form/report-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "XD6MXWNH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-form/report-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "cws73dY5",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-form/report-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-form/report-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-form/report', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+VHJz9O6",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-form/report\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "OWVRGjSq",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-form/report\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting-report/report-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-report/report', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "bhbNuTLy",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-report/report\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "uUgaVW+v",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-report/report\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting/meeting-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting/meeting-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "lYFr+qUp",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting/meeting-card\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "s19tcStF",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting/meeting-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/meeting/meeting-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting/meeting-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "6aRlrD5w",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting/meeting-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "mYH3eQdp",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting/meeting-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/modal-window-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | modal-window', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "7A/QR4Ic",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"modal-window\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "6T773R0O",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"modal-window\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/modal-window/confirm-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | modal-window/confirm', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "BmT4Z7oX",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"modal-window/confirm\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "rnvvHDlP",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"modal-window/confirm\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/register-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | register-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "YtZ5OcI6",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"register-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "0lFi1VJt",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"register-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/report/report-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | report/report-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "8hiE67+H",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"report/report-card\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "DKz7IzeM",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"report/report-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/report/report-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | report/report-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "U7URZKX9",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"report/report-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "qjFJBFAX",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"report/report-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/report/report-form/form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | report/report-form/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "nz6sLkHe",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"report/report-form/form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "yhFNPyk2",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"report/report-form/form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/speaker-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | speaker-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "d4uBpV0t",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-card\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "MnJIq8bb",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/components/speaker-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | speaker-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "qcp+twW8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "TWXDckYV",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/integration/helpers/env-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Helper | env', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "gK7RAtd+",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"env\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books/tests/test-helper', ['books/app', 'books/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('books/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/book-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/datepicker/input-datepicker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/datepicker/input-datepicker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-file-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-file-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input/input-datepicker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input/input-datepicker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/login-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-card/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-card/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-form/report-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-form/report-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-form/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-form/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-report/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-report/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting/meeting-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting/meeting-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting/meeting-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting/meeting-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/modal-window-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/modal-window-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/modal-window/confirm-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/modal-window/confirm-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/register-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/register-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report/report-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report/report-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report/report-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report/report-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report/report-form/form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report/report-form/form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/env-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/env-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/current-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-string-test.js should pass ESLint\n\n');
  });
});
define('books/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('books/tests/unit/adapters/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:user');
      assert.ok(adapter);
    });
  });
});
define('books/tests/unit/controllers/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/create-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-book');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/create-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-meeting');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/create-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-speaker');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-book');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-meeting');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-speaker');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:register');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/controllers/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers');
      assert.ok(controller);
    });
  });
});
define('books/tests/unit/models/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('book', {});
      });
      assert.ok(model);
    });
  });
});
define('books/tests/unit/models/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('meeting', {});
      });
      assert.ok(model);
    });
  });
});
define('books/tests/unit/models/report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('report', {});
      });
      assert.ok(model);
    });
  });
});
define('books/tests/unit/models/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('speaker', {});
      });
      assert.ok(model);
    });
  });
});
define('books/tests/unit/models/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('user', {});
      });
      assert.ok(model);
    });
  });
});
define('books/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/create-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-book');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/create-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-meeting');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/create-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-speaker');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-meeting');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:register');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/routes/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers');
      assert.ok(route);
    });
  });
});
define('books/tests/unit/serializers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('application', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books/tests/unit/serializers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('book', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books/tests/unit/serializers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('meeting');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('meeting', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books/tests/unit/serializers/report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('report');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('report', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books/tests/unit/serializers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('speaker', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books/tests/unit/services/current-user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | current-user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:current-user');
      assert.ok(service);
    });
  });
});
define('books/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define('books/tests/unit/transforms/date-string-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:date-string', 'Unit | Transform | date string', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:date-string');
      assert.ok(transform);
    });
  });
});
define('books/config/environment', [], function() {
  var prefix = 'books';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('books/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
