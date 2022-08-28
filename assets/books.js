"use strict";



define('books/abilities/book', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }

      return new Ember.RSVP.Promise(function (resolve, reject) {
        return _this.get('model.user').then(function (user) {
          resolve(user.get('email') === _this.get('currentUser.user.email'));
        }).catch(function () {
          reject(false);
        });
      });
    }).volatile()
  });
});
define('books/adapters/application', ['exports', 'ember-data', 'books/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    session: Ember.inject.service(),
    host: _environment.default.backendUrl,

    headers: Ember.computed(function () {
      var resultHeaders = {
        'Content-Type': 'application/json'
      };

      if (this.get('session.isAuthenticated')) {
        resultHeaders['Authorization'] = 'Bearer ' + this.session.data.authenticated.token;
      }

      return resultHeaders;
    }).volatile(),

    buildURL: function buildURL(modelName, id, snapshot, requestType, query) {
      var url = this._super.apply(this, arguments);
      if (modelName === 'speaker' && requestType === 'findRecord' && id) {
        url += '?_embed=reports';
      }

      if (modelName === 'book' && requestType === 'findRecord' && id) {
        url += '?_embed=reports';
      }

      if (modelName === 'meeting' && requestType === 'findRecord' && id) {
        url += '?_embed=reports';
      }

      if (modelName === 'meeting' && requestType === 'findAll') {
        url += '?_embed=reports';
      }

      if (modelName === 'meeting' && requestType === 'query') {
        url += '?_embed=reports';
      }
      return url;
    },
    handleResponse: function handleResponse(status, headers, payload) {
      var meta = {
        total: headers['x-total-count']
      };

      payload.meta = meta;

      return this._super(status, headers, payload);
    }
  });
});
define('books/adapters/user', ['exports', 'books/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    urlForQueryRecord: function urlForQueryRecord(query) {
      if (query.me) {
        delete query.me;

        return this._super.apply(this, arguments) + '/me';
      }

      return this._super.apply(this, arguments);
    }
  });
});
define('books/app', ['exports', 'books/resolver', 'ember-load-initializers', 'books/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('books/component-managers/glimmer', ['exports', '@glimmer/component/-private/ember-component-manager'], function (exports, _emberComponentManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
define('books/components/-dynamic-element-alt', ['exports', '@glimmer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DynamicElementAlt = function (_Component) {
    _inherits(DynamicElementAlt, _Component);

    function DynamicElementAlt() {
      _classCallCheck(this, DynamicElementAlt);

      return _possibleConstructorReturn(this, (DynamicElementAlt.__proto__ || Object.getPrototypeOf(DynamicElementAlt)).apply(this, arguments));
    }

    return DynamicElementAlt;
  }(_component.default);

  exports.default = DynamicElementAlt;
});
define('books/components/-dynamic-element', ['exports', '@glimmer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DynamicElement = function (_Component) {
    _inherits(DynamicElement, _Component);

    function DynamicElement() {
      _classCallCheck(this, DynamicElement);

      return _possibleConstructorReturn(this, (DynamicElement.__proto__ || Object.getPrototypeOf(DynamicElement)).apply(this, arguments));
    }

    return DynamicElement;
  }(_component.default);

  exports.default = DynamicElement;
});
define('books/components/basic-dropdown-content', ['exports', 'ember-basic-dropdown/components/basic-dropdown-content'], function (exports, _basicDropdownContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
});
define('books/components/basic-dropdown-trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown-trigger'], function (exports, _basicDropdownTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
});
define('books/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('books/components/book-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service(),

    progressbarStyle: Ember.computed('progressbarStyle', function () {
      return Ember.String.htmlSafe('width: ' + this.get("book.averageRating") + '%;');
    })
  });
});
define('books/components/book-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    currentUser: Ember.inject.service(),

    actions: {
      submitForm: function submitForm(e) {
        e.preventDefault();
        this.save({
          id: this.get("book.id"),
          name: this.get("name"),
          author: this.get("author"),
          sumPages: this.get("sumPages"),
          tags: this.get("tags"),
          averageRating: this.get("averageRating"),
          urlCover: this.get("urlCover"),
          urlDescription: this.get("urlDescription"),
          user: this.get("currentUser.user")
        }, this.get("uploadData"));
      },
      uploadDataChanged: function uploadDataChanged(uploadData) {
        Ember.set(this, "uploadData", uploadData);
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.setProperties({
        name: this.get("book.name"),
        author: this.get("book.author"),
        sumPages: this.get("book.sumPages"),
        tags: this.get("book.tags"),
        averageRating: this.get("book.averageRating"),
        urlCover: this.get("book.urlCover"),
        urlDescription: this.get("book.urlDescription")
      });
    }
  });
});
define('books/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('books/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('books/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('books/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('books/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('books/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('books/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('books/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('books/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('books/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('books/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('books/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('books/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('books/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('books/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('books/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('books/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('books/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('books/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('books/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('books/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('books/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('books/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('books/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('books/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('books/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('books/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('books/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('books/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('books/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('books/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('books/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('books/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('books/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('books/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('books/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('books/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('books/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('books/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('books/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('books/components/g-recaptcha-invisible', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-invisible'], function (exports, _gRecaptchaInvisible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaInvisible.default;
    }
  });
});
define('books/components/g-recaptcha-v2', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-v2'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('books/components/input-file', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isFileChoosen: Ember.computed('uploadData', function () {
      return this.get("uploadData") && this.get("uploadData").files.length;
    }),

    ifRemoveButtonDisabled: Ember.computed('isFileChoosen', function () {
      return !this.get("isFileChoosen");
    }),

    fileName: Ember.computed('isFileChoosen', function () {
      return this.get("isFileChoosen") ? this.get("uploadData").files[0].name : "Выберите файл";
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var onFileAdd = function onFileAdd(e, uploadData) {
        _this.uploadDataChanged(uploadData);
      };

      this.$(".custom-file-input").fileupload({
        autoUpload: false,
        dataType: 'json',
        maxNumberOfFiles: 1,
        singleFileUploads: true,
        dropZone: null,
        add: onFileAdd
      });
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.$(".custom-file-input").fileupload("destroy");
    },


    actions: {
      removeFile: function removeFile() {
        Ember.set(this, "uploadData", null);
      }
    }
  });
});
define("books/components/input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);
      this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();

      var add = function add(tag) {
        var tags = _this.get("tags");
        _this.set("tags", [].concat(_toConsumableArray(tags), [tag]));
      };

      var remove = function remove(tag) {
        var tags = _this.get("tags");
        _this.set("tags", tags.filter(function (e) {
          return e !== tag;
        }));
      };

      this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").on('beforeItemAdd', function (event) {
        var tag = event.item;
        add(tag);
      });

      this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").on('beforeItemRemove', function (event) {
        var tag = event.item;
        remove(tag);
      });
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").off('beforeItemAdd');
      this.$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").off('beforeItemRemove');
    }
  });
});
define("books/components/input/input-datepicker", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this.$(".datepicker").datepicker({
                clearBtn: true,
                format: "yyyy-mm-dd",
                language: "ru",
                autoclose: true
            });
        }
    });
});
define('books/components/login-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      login: function login(e) {
        e.preventDefault();
        this.get('onSubmit')({
          email: this.email,
          password: this.password
        });
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this.setProperties({
        email: this.get('user.email'),
        password: this.get('user.password')
      });
    }
  });
});
define('books/components/maybe-in-element', ['exports', 'ember-maybe-in-element/components/maybe-in-element'], function (exports, _maybeInElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _maybeInElement.default;
    }
  });
});
define('books/components/meeting/meeting-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service()
  });
});
define('books/components/meeting/meeting-form', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Component.extend({
        store: Ember.inject.service(),
        modalTitle: '',
        idModal: 'Modal',
        reportForm: {},

        actions: {
            submitForm: function submitForm(e) {
                e.preventDefault();
                this.save();
            },
            deleteReport: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(report) {
                    var _this = this;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return report.destroyRecord().then(function () {
                                        _this.get('store').unloadRecord(report);
                                    });

                                case 2:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteReport(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteReport;
            }(),
            addReport: function addReport() {
                this.set('modalTitle', 'Добавить доклад');
                this.set('reportForm', {
                    rating_book: '',
                    URLPresentation: '',
                    URLVideo: '',
                    Review: '',
                    book: this.get('listBook').firstObject,
                    speaker: this.get('listSpeaker').firstObject
                });
                this.$('#' + this.idModal).modal('show');
            },
            updataReport: function updataReport(report) {
                this.set('modalTitle', 'Редактировать доклад');
                this.set('reportForm', {
                    id: report.id,
                    rating_book: report.rating_book,
                    URLPresentation: report.URLPresentation,
                    URLVideo: report.URLVideo,
                    Review: report.Review,
                    book: report.book,
                    speaker: report.speaker,
                    tempId: report.tempId
                });
                this.$('#' + this.idModal).modal('show');
            },
            saveReport: function saveReport() {
                var reportForm = this.get('reportForm');
                this.$('#' + this.idModal).modal('hide');
                this.saveReport(reportForm);
            }
        },
        didReceiveAttrs: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _args2 = arguments;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this._super.apply(this, _args2);

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function didReceiveAttrs() {
                return _ref2.apply(this, arguments);
            }

            return didReceiveAttrs;
        }()
    });
});
define('books/components/modal-window/confirm', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      save: function save() {
        this.save(this.get('data'));
      }
    }
  });
});
define('books/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('books/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('books/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('books/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('books/components/power-select/no-matches-message', ['exports', 'ember-power-select/components/power-select/no-matches-message'], function (exports, _noMatchesMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
});
define('books/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('books/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('books/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('books/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('books/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('books/components/register-form', ['exports', 'books/config/environment', 'ember-cp-validations'], function (exports, _environment, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    var Validations = (0, _emberCpValidations.buildValidations)({
        email: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true),
        // validator('presence', { presence: true, message:computed('model.{email,i18n.locale}', function () {
        //     return get(this, 'model.i18n').t('errors.empty');
        //   }) }),
        (0, _emberCpValidations.validator)('format', { type: 'email' })],
        password: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('length', {
            min: 4,
            max: 8
        })]
    });

    exports.default = Ember.Component.extend(Validations, {
        i18n: Ember.inject.service(),
        iAmRobot: true,
        reset: false,
        siteKeyCaptcha: _environment.default['ember-cli-google'].recaptcha.siteKey,
        isFormValid: Ember.computed.alias('validations.isValid'),
        isSubmit: false,

        actions: {
            saveReview: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    e.preventDefault();
                                    if (this.get('isFormValid')) {
                                        this.get('onSubmit')({
                                            email: this.get('email'),
                                            password: this.get('password')
                                        });
                                    } else {
                                        this.set('isSubmit', true);
                                    }

                                case 2:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function saveReview(_x) {
                    return _ref.apply(this, arguments);
                }

                return saveReview;
            }(),
            verified: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
                    var _ref3, success;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return fetch(_environment.default.backendUrl + '/recaptcha?key=' + key);

                                case 3:
                                    _context2.next = 5;
                                    return _context2.sent.json();

                                case 5:
                                    _ref3 = _context2.sent;
                                    success = _ref3.success;

                                    this.set('iAmRobot', !success);
                                    _context2.next = 13;
                                    break;

                                case 10:
                                    _context2.prev = 10;
                                    _context2.t0 = _context2['catch'](0);

                                    this.set('reset', true);

                                case 13:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[0, 10]]);
                }));

                function verified(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return verified;
            }(),
            expired: function expired() {
                this.set('iAmRobot', true);
            }
        }

    });
});
define('books/components/report/report-card', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        didReceiveAttrs: function didReceiveAttrs() {
            this._super.apply(this, arguments);
            // console.log(this.report.book.get('name'));
            console.log(this.report);
        }
    });
});
define('books/components/report/report-form', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Component.extend({
        actions: {
            changeBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                    var book;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.get('listBook').find(function (listBook) {
                                        return listBook.id === e.target.value;
                                    });

                                case 2:
                                    book = _context.sent;

                                    this.set('report.book', book);

                                case 4:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function changeBook(_x) {
                    return _ref.apply(this, arguments);
                }

                return changeBook;
            }(),
            changeSpeaker: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                    var speaker;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.get('listSpeaker').find(function (speaker) {
                                        return speaker.id === e.target.value;
                                    });

                                case 2:
                                    speaker = _context2.sent;

                                    this.set('report.speaker', speaker);

                                case 4:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function changeSpeaker(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return changeSpeaker;
            }()
        }
    });
});
define('books/components/report/report-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books/components/speaker-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service()
  });
});
define("books/components/speaker-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      submitForm: function submitForm(e) {
        e.preventDefault();
        this.save({
          id: this.get("speaker.id"),
          firstName: this.get("firstName"),
          lastName: this.get("lastName"),
          patronymic: this.get("patronymic")
        });
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.setProperties({
        firstName: this.get("speaker.firstName"),
        lastName: this.get("speaker.lastName"),
        patronymic: this.get("speaker.patronymic")
      });
    }
  });
});
define('books/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('books/controllers/application', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    i18n: Ember.inject.service(),
    currentUser: Ember.inject.service(),

    currentLocale: _environment.default.i18n.defaultLocale,

    actions: {
      logout: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();

                  this.get('session').invalidate();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function logout(_x) {
          return _ref.apply(this, arguments);
        }

        return logout;
      }(),
      changeLocale: function changeLocale(e) {
        Ember.set(this, 'currentLocale', e.target.value);
        Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
      }
    },

    init: function init() {
      this._super.apply(this, arguments);
      Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
    }
  });
});
define('books/controllers/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),

    queryParams: ["search", "tags_like"],
    search: "",
    tags_like: "",
    dataService: Ember.inject.service("data"),

    actions: {
      deleteBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
          var _this = this;

          var applicationLogger;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  _context.next = 4;
                  return book.destroyRecord().then(function () {
                    _this.get('store').unloadRecord(book);
                  });

                case 4:
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 6]]);
        }));

        function deleteBook(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteBook;
      }(),
      inputHandler: function inputHandler(event) {
        Ember.set(this, 'search', event.target.value);
        var debounceId = Ember.get(this, 'debounceId');
        Ember.run.cancel(debounceId);
        this._refreshData();
      },
      actionSearch: function actionSearch(e) {
        e.preventDefault();
        this.send("RouteActionSearch");
      }
    },

    _refreshData: function _refreshData() {
      var _this2 = this;

      var debounceId = Ember.run.debounce(function () {
        var search = Ember.get(_this2, 'search');
        var tags_like = Ember.get(_this2, 'tags_like');
        _this2.get("store").query("book", { q: search, tags_like: tags_like }).then(function (data) {
          Ember.set(_this2, 'model', data);
          Ember.run.schedule('afterRender', function () {
            _this2._refreshData();
          });
        });
      }, 2000);

      Ember.set(this, 'debounceId', debounceId);
    }
  });
});
define('books/controllers/create-book', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service("data"),

    readFileAsync: function readFileAsync(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onloadend = function () {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    },


    actions: {
      createBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, uploadData) {
          var applicationLogger, newBook, base64text, mass, newImage;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  newBook = this.get("store").createRecord("book", book);
                  _context.prev = 2;

                  if (!uploadData) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 6;
                  return this.readFileAsync(uploadData.files[0]);

                case 6:
                  base64text = _context.sent;
                  mass = base64text.split(',');
                  newImage = this.get("store").createRecord("image", {
                    type: mass[0],
                    img: mass[1]
                  });
                  _context.next = 11;
                  return newImage.save();

                case 11:
                  newBook.set("urlCover", _environment.default.backendUrl + '/images/' + newImage.id);

                case 12:
                  _context.next = 14;
                  return newBook.save();

                case 14:
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](2);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 19:

                  this.transitionToRoute("books");

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 16]]);
        }));

        function createBook(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return createBook;
      }()
    }
  });
});
define('books/controllers/create-meeting', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service(),
        moment: Ember.inject.service(),

        actions: {
            updateMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var _this = this;

                    var applicationLogger, newMeeting, date, meeting, reports;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    applicationLogger = Ember.get(this, 'applicationLogger');
                                    newMeeting = this.get('model.meeting');
                                    date = this.get('moment').moment(newMeeting.dateMeeting, 'YYYY-MM-DD').toDate();

                                    // try {

                                    meeting = this.get("store").createRecord("meeting", {
                                        dateMeeting: date,
                                        reports: []
                                    });
                                    _context2.next = 6;
                                    return meeting.save();

                                case 6:
                                    reports = newMeeting.reports.map(function (r) {
                                        return new Promise(function () {
                                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                                var report;
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                    while (1) {
                                                        switch (_context.prev = _context.next) {
                                                            case 0:
                                                                console.log(r);
                                                                _context.next = 3;
                                                                return _this.get("store").createRecord("report", r);

                                                            case 3:
                                                                report = _context.sent;
                                                                _context.next = 6;
                                                                return meeting.reports.pushObject(report);

                                                            case 6:
                                                                _context.next = 8;
                                                                return report.save();

                                                            case 8:
                                                                resolve();

                                                            case 9:
                                                            case 'end':
                                                                return _context.stop();
                                                        }
                                                    }
                                                }, _callee, _this);
                                            }));

                                            return function (_x, _x2) {
                                                return _ref2.apply(this, arguments);
                                            };
                                        }());
                                    });
                                    _context2.next = 9;
                                    return Promise.all(reports);

                                case 9:
                                    _context2.next = 11;
                                    return meeting.save();

                                case 11:
                                    _context2.next = 13;
                                    return this.get('store').unloadAll();

                                case 13:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function updateMeeting() {
                    return _ref.apply(this, arguments);
                }

                return updateMeeting;
            }(),
            saveReport: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newReport) {
                    var meeting, report, _report;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    meeting = this.get('model.meeting');


                                    if (!newReport.tempId) {
                                        report = this.get("store").createRecord("report", newReport);

                                        report.set('dataReport', new Date(meeting.dateMeeting));
                                        report.set('tempId', Date.now());
                                        meeting.reports.pushObject(report);
                                    } else {
                                        _report = meeting.reports.find(function (e) {
                                            return e.tempId === newReport.tempId;
                                        });

                                        _report.set('Review', newReport.Review);
                                        _report.set('URLPresentation', newReport.URLPresentation);
                                        _report.set('URLVideo', newReport.URLVideo);
                                        _report.set('rating_book', newReport.rating_book);
                                        _report.set('book', newReport.book);
                                        _report.set('speaker', newReport.speaker);
                                    }

                                case 2:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function saveReport(_x3) {
                    return _ref3.apply(this, arguments);
                }

                return saveReport;
            }()
        }
    });
});
define('books/controllers/create-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service("data"),
    actions: {
      createSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var applicationLogger, newSpeaker;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  newSpeaker = this.get("store").createRecord("speaker", speaker);
                  _context.next = 5;
                  return newSpeaker.save();

                case 5:
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 10:

                  this.transitionToRoute("speakers");

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 7]]);
        }));

        function createSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return createSpeaker;
      }()
    }
  });
});
define('books/controllers/edit-book', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service("data"),
    init: function init() {
      this._super.apply(this, arguments);
    },
    readFileAsync: function readFileAsync(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onloadend = function () {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    },


    actions: {
      updateBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, uploadData) {
          var applicationLogger, bookModel, base64text, mass, newImage;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  bookModel = this.get("model");

                  bookModel.set("name", book.name);
                  bookModel.set("author", book.author);
                  bookModel.set("sumPages", book.sumPages);
                  bookModel.set("tags", book.tags);
                  bookModel.set("average_rating", book.average_rating);
                  bookModel.set("urlCover", book.urlCover);
                  bookModel.set("urlDescription", book.urlDescription);

                  if (!uploadData) {
                    _context.next = 19;
                    break;
                  }

                  _context.next = 13;
                  return this.readFileAsync(uploadData.files[0]);

                case 13:
                  base64text = _context.sent;
                  mass = base64text.split(',');
                  newImage = this.get("store").createRecord("image", {
                    type: mass[0],
                    img: mass[1]
                  });
                  _context.next = 18;
                  return newImage.save();

                case 18:
                  bookModel.set("urlCover", _environment.default.backendUrl + '/images/' + newImage.id);

                case 19:
                  _context.next = 21;
                  return bookModel.save();

                case 21:
                  _context.next = 26;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 26:

                  this.transitionToRoute("books");

                case 27:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 23]]);
        }));

        function updateBook(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return updateBook;
      }()
    }
  });
});
define('books/controllers/edit-meeting', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service(),
        moment: Ember.inject.service(),

        actions: {
            updateMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var _this = this;

                    var applicationLogger, meeting, date, reports;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    applicationLogger = Ember.get(this, 'applicationLogger');
                                    meeting = this.get('model.meeting');
                                    date = this.get('moment').moment(meeting.dateMeeting, 'YYYY-MM-DD').toDate();

                                    meeting.set('dateMeeting', date);
                                    _context2.prev = 4;
                                    reports = meeting.reports.map(function (report) {
                                        return new Promise(function () {
                                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                    while (1) {
                                                        switch (_context.prev = _context.next) {
                                                            case 0:
                                                                report.set('dataReport', meeting.dateMeeting);
                                                                _context.next = 3;
                                                                return report.save();

                                                            case 3:
                                                                resolve();

                                                            case 4:
                                                            case 'end':
                                                                return _context.stop();
                                                        }
                                                    }
                                                }, _callee, _this);
                                            }));

                                            return function (_x, _x2) {
                                                return _ref2.apply(this, arguments);
                                            };
                                        }());
                                    });
                                    _context2.next = 8;
                                    return Promise.all(reports);

                                case 8:
                                    meeting.save();
                                    _context2.next = 14;
                                    break;

                                case 11:
                                    _context2.prev = 11;
                                    _context2.t0 = _context2['catch'](4);

                                    applicationLogger.log(this.target.currentURL, _context2.t0.message);

                                case 14:

                                    this.transitionToRoute("meetings");

                                case 15:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[4, 11]]);
                }));

                function updateMeeting() {
                    return _ref.apply(this, arguments);
                }

                return updateMeeting;
            }(),
            saveReport: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newReport) {
                    var meeting, report, _report;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    meeting = this.get('model.meeting');

                                    if (!(!newReport.id && !newReport.tempId)) {
                                        _context3.next = 8;
                                        break;
                                    }

                                    report = this.get("store").createRecord("report", newReport);

                                    report.set('dataReport', new Date(meeting.dateMeeting));
                                    report.set('tempId', Date.now());
                                    meeting.reports.pushObject(report);
                                    _context3.next = 20;
                                    break;

                                case 8:
                                    _report = void 0;

                                    if (!newReport.id) {
                                        _context3.next = 13;
                                        break;
                                    }

                                    _context3.next = 12;
                                    return this.get("store").peekRecord("report", newReport.id);

                                case 12:
                                    _report = _context3.sent;

                                case 13:

                                    if (newReport.tempId) {
                                        _report = meeting.reports.find(function (e) {
                                            return e.tempId === newReport.tempId;
                                        });
                                    }
                                    _report.set('Review', newReport.Review);
                                    _report.set('URLPresentation', newReport.URLPresentation);
                                    _report.set('URLVideo', newReport.URLVideo);
                                    _report.set('rating_book', newReport.rating_book);
                                    _report.set('book', newReport.book);
                                    _report.set('speaker', newReport.speaker);

                                case 20:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function saveReport(_x3) {
                    return _ref3.apply(this, arguments);
                }

                return saveReport;
            }()
        }
    });
});
define('books/controllers/edit-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service("data"),
    init: function init() {
      this._super.apply(this, arguments);
    },


    actions: {
      updateSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var applicationLogger, speakerModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  speakerModel = this.get("model");

                  speakerModel.set("firstName", speaker.firstName);
                  speakerModel.set("lastName", speaker.lastName);
                  speakerModel.set("patronymic", speaker.patronymic);
                  _context.next = 8;
                  return speakerModel.save();

                case 8:
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 13:

                  this.transitionToRoute("speakers");

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 10]]);
        }));

        function updateSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return updateSpeaker;
      }()
    }
  });
});
define('books/controllers/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),

    actions: {
      login: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.get('session').authenticate('authenticator:jwt', {
                    email: user.email,
                    password: user.password
                  });

                case 3:
                  this.transitionToRoute('index');
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](0);

                  this.send('error', _context.t0);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 6]]);
        }));

        function login(_x) {
          return _ref.apply(this, arguments);
        }

        return login;
      }(),
      error: function error(_error, transition) {
        if (_error instanceof Error) {
          return true;
        }

        this.set('errors', _error.json.errors);
        return false;
      }
    },

    resetErrors: function resetErrors() {
      this.set('errors', {});
    }
  });
});
define('books/controllers/meetings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var PER_PAGE = exports.PER_PAGE = 2;

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    queryParams: ['page', 'date', 'speaker', 'book'],
    page: 1,
    date: "",
    speaker: "",
    book: "",

    pages: Ember.computed('model.meetings.meta.total', function () {
      var total = this.get('model.meetings.meta.total');
      if (Number.isNaN(total) || total <= 0) {
        return [];
      }
      return new Array(Math.ceil(total / PER_PAGE)).fill().map(function (value, index) {
        return index + 1;
      });
    }),

    actions: {
      delete: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeteing) {
          var _this = this;

          var applicationLogger;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  _context.next = 4;
                  return meeteing.reports.map(function (r) {
                    r.destroyRecord().then(function () {
                      _this.get('store').unloadRecord(r);
                    });
                  });

                case 4:
                  _context.next = 6;
                  return meeteing.destroyRecord().then(function () {
                    _this.get('store').unloadRecord(meeteing);
                  });

                case 6:
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 8]]);
        }));

        function _delete(_x) {
          return _ref.apply(this, arguments);
        }

        return _delete;
      }(),
      changeSpeaker: function changeSpeaker(e) {
        this.set("speaker", e.target.value);
      },
      changeBook: function changeBook(e) {
        this.set("book", e.target.value);
      },
      actionSearch: function actionSearch(e) {
        e.preventDefault();
        this.send("RouteActionSearch");
      },
      clearSearch: function clearSearch(e) {
        e.preventDefault();
        this.set("date", "");
        this.set("speaker", "");
        this.set("book", "");
        this.send("RouteActionSearch");
      },
      back: function back(e) {
        e.preventDefault();
        this.set('page', this.get('page') - 1);
        this.send("RouteActionSearch");
      },
      next: function next(e) {
        e.preventDefault();
        this.set('page', this.get('page') + 1);
        this.send("RouteActionSearch");
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
    }
  });
});
define('books/controllers/register', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        actions: {
            saveUser: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
                    var newUser;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    newUser = void 0;
                                    _context.prev = 1;

                                    newUser = this.get('store').createRecord('user', user);
                                    _context.next = 5;
                                    return newUser.save();

                                case 5:

                                    this.transitionToRoute('index');
                                    _context.next = 12;
                                    break;

                                case 8:
                                    _context.prev = 8;
                                    _context.t0 = _context['catch'](1);

                                    _context.t0.user = newUser;
                                    this.send('error', _context.t0);

                                case 12:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 8]]);
                }));

                function saveUser(_x) {
                    return _ref.apply(this, arguments);
                }

                return saveUser;
            }(),
            error: function error(_error, transition) {
                this.set('errors', _error.errors);
                return false;
            }
        },

        resetErrors: function resetErrors() {
            this.set('errors', {});
        }
    });
});
define('books/controllers/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    queryParams: ["search"],
    search: "",
    dataService: Ember.inject.service("data"),
    session: Ember.inject.service(),

    actions: {
      deleteSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var _this = this;

          var applicationLogger;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  applicationLogger = Ember.get(this, 'applicationLogger');
                  _context.prev = 1;
                  _context.next = 4;
                  return speaker.destroyRecord().then(function () {
                    _this.get('store').unloadRecord(speaker);
                  });

                case 4:
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](1);

                  applicationLogger.log(this.target.currentURL, _context.t0.message);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 6]]);
        }));

        function deleteSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteSpeaker;
      }(),
      actionSearch: function actionSearch(e) {
        e.preventDefault();
        this.send("RouteActionSearch");
      }
    }
  });
});
define('books/helpers/-clear-element', ['exports', 'ember-in-element-polyfill/helpers/-clear-element'], function (exports, _clearElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clearElement.default;
    }
  });
});
define('books/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('books/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('books/helpers/app-version', ['exports', 'books/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('books/helpers/assign', ['exports', 'ember-assign-helper/helpers/assign'], function (exports, _assign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _assign.default;
    }
  });
  Object.defineProperty(exports, 'assign', {
    enumerable: true,
    get: function () {
      return _assign.assign;
    }
  });
});
define('books/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
define('books/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('books/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('books/helpers/can', ['exports', 'ember-can/helpers/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('books/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('books/helpers/cannot', ['exports', 'ember-can/helpers/cannot'], function (exports, _cannot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cannot.default;
    }
  });
});
define('books/helpers/element', ['exports', 'ember-element-helper/helpers/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('books/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('books/helpers/ensure-safe-component', ['exports', '@embroider/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
define('books/helpers/env', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.env = env;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function env(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        propertyName = _ref2[0];

    return Ember.get(_environment.default, propertyName);
  }

  exports.default = Ember.Helper.helper(env);
});
define('books/helpers/eq', ['exports', 'ember-truth-helpers/helpers/eq'], function (exports, _eq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
});
define('books/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('books/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('books/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('books/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('books/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('books/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('books/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('books/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('books/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
define('books/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
define('books/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
define('books/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('books/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('books/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('books/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('books/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('books/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('books/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('books/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('books/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('books/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('books/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('books/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('books/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('books/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('books/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('books/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('books/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('books/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('books/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-eq'], function (exports, _notEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(exports, 'notEqualHelper', {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
});
define('books/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('books/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('books/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('books/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('books/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('books/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('books/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('books/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('books/helpers/promise-all', ['exports', 'ember-promise-helpers/helpers/promise-all'], function (exports, _promiseAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  Object.defineProperty(exports, 'promiseAll', {
    enumerable: true,
    get: function () {
      return _promiseAll.promiseAll;
    }
  });
});
define('books/helpers/promise-hash', ['exports', 'ember-promise-helpers/helpers/promise-hash'], function (exports, _promiseHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  Object.defineProperty(exports, 'promiseHash', {
    enumerable: true,
    get: function () {
      return _promiseHash.promiseHash;
    }
  });
});
define('books/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _promiseRejectedReason) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
});
define('books/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('books/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('books/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('books/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('books/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('books/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('books/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'books/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('books/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('books/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('books/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('books/initializers/ember-i18n-cp-validations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    // intentionally left blank to not break upgrade path
  }

  exports.default = {
    name: 'ember-i18n-cp-validations',
    initialize: initialize
  };
});
define('books/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('books/initializers/ember-simple-auth', ['exports', 'books/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-restoration', 'ember-simple-auth/session-stores/adaptive', 'ember-simple-auth/session-stores/local-storage', 'ember-simple-auth/session-stores/cookie'], function (exports, _environment, _configuration, _setupSession, _setupSessionRestoration, _adaptive, _localStorage, _cookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      registry.register('session-store:adaptive', _adaptive.default);
      registry.register('session-store:cookie', _cookie.default);
      registry.register('session-store:local-storage', _localStorage.default);

      (0, _setupSession.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('books/initializers/export-application-global', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('books/initializers/load-bootstrap-config', ['exports', 'books/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('books/initializers/setup-ember-can', ['exports', 'ember-can/initializers/setup-ember-can'], function (exports, _setupEmberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.initialize;
    }
  });
});
define('books/initializers/simple-auth-token', ['exports', 'ember-simple-auth-token/authenticators/token', 'ember-simple-auth-token/authenticators/jwt'], function (exports, _token, _jwt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',
    initialize: function initialize(container) {
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }
  };
});
define('books/initializers/start-application', ['exports', 'books/loggers/console-logger'], function (exports, _consoleLogger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    application.register('logger:main', _consoleLogger.default);
    application.inject('component', 'applicationLogger', 'logger:main');
    application.inject('controller', 'applicationLogger', 'logger:main');
    application.inject('route', 'applicationLogger', 'logger:main');
  }

  exports.default = {
    initialize: initialize
  };
});
define("books/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('books/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('books/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize() {}
  };
});
define("books/instance-initializers/start-application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* appInstance */{
    // appInstance.inject('route', 'foo', 'service:foo');
  }

  exports.default = {
    initialize: initialize
  };
});
define("books/locales/en/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    errors: {
      description: "This field",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} doesn't match {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} can't be empty",
      blank: "{{description}} can't be blank",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} must be a number",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} must be other than {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} must be a valid email address",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} must be a valid url",
      passwordDescription: 'Password and password confirmation',
      passwordDontMatch: 'do not match'
    },
    menu: {
      remember: "Remember",
      back: "Back",
      registerBtn: "Зарегистрироваться",
      bookClub: 'Book club',
      desktop: 'Desktop',
      meetings: 'Club meetings',
      speakers: 'Speakers',
      books: 'Books',
      speaker: 'Speaker',
      book: 'Book',
      dateMeeting: "Date meeting",
      listReports: "List of reports",
      ratingBook: "Rating book",
      review: "Review",
      links: "Links",
      register: 'Register',
      login: 'Login',
      logout: 'Logout'
    }
  };
});
define("books/locales/ru/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    errors: {
      description: "Это поле",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} не совпадает с {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} не может быть пустым",
      blank: "{{description}} должно быть заполнено",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} must be a number",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} должен отличаться от {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} должно иметь корректный формат e-mail адреса",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} must be a valid url",
      passwordDescription: 'Пароль и подтверждение пароля',
      passwordDontMatch: 'не совпадают'
    },
    menu: {
      remember: "Запомнить",
      back: "Назад",
      registerBtn: "Зарегистрироваться",
      bookClub: 'Книжный клуб',
      desktop: 'Рабочий стол',
      meetings: 'Встречи клуба',
      speakers: 'Спикеры',
      books: 'Книги',
      speaker: 'Спикер',
      book: 'Книга',
      dateMeeting: "Дата Встреча",
      listReports: "Список докладов",
      ratingBook: "Оценка",
      review: "Отзыв",
      links: "Ссылки",
      register: 'Регистрация',
      login: 'Войти',
      logout: 'Выйти'
    }
  };
});
define('books/loggers/console-logger', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend({
    dataService: Ember.inject.service("logger-error"),

    log: function log(url, message) {
      // eslint-disable-next-line no-console
      this.get("dataService").writeError({ url: url, message: message });
    }
  });
});
define("books/models/book", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr("string"),
    author: _emberData.default.attr("string"),
    sumPages: _emberData.default.attr("number"),
    tags: _emberData.default.attr(),
    averageRating: _emberData.default.attr("number"),
    urlCover: _emberData.default.attr("string"),
    urlDescription: _emberData.default.attr("string"),

    report: _emberData.default.hasMany("report"),
    user: _emberData.default.belongsTo('user')
  });
});
define('books/models/image', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    img: _emberData.default.attr('string'),
    type: _emberData.default.attr('string')
  });
});
define("books/models/meeting", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    dateMeeting: _emberData.default.attr("date-string"),

    reports: _emberData.default.hasMany("report")
  });
});
define("books/models/report", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    dataReport: _emberData.default.attr(),
    rating_book: _emberData.default.attr(),
    URLPresentation: _emberData.default.attr(),
    URLVideo: _emberData.default.attr(),
    Review: _emberData.default.attr(),

    book: _emberData.default.belongsTo("book"),
    speaker: _emberData.default.belongsTo("speaker"),
    meeting: _emberData.default.belongsTo("meeting")
  });
});
define("books/models/speaker", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    firstName: _emberData.default.attr("string"),
    lastName: _emberData.default.attr("string"),
    patronymic: _emberData.default.attr("string"),

    report: _emberData.default.hasMany("report")
  });
});
define('books/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    email: _emberData.default.attr('string'),
    password: _emberData.default.attr('string')
  });
});
define('books/modifiers/did-insert', ['exports', '@ember/render-modifiers/modifiers/did-insert'], function (exports, _didInsert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
define('books/modifiers/did-update', ['exports', '@ember/render-modifiers/modifiers/did-update'], function (exports, _didUpdate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
define('books/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('books/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('books/modifiers/style', ['exports', 'ember-style-modifier/modifiers/style'], function (exports, _style) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
define('books/modifiers/will-destroy', ['exports', '@ember/render-modifiers/modifiers/will-destroy'], function (exports, _willDestroy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
define('books/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('books/router', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('speakers');
    this.route('edit-book', { path: '/edit-book/:id' });
    this.route('edit-speaker', { path: '/edit-speaker/:id' });
    this.route('404', { path: '/*path' });
    this.route('create-book');
    this.route('create-speaker');
    this.route('meetings');
    this.route('edit-meeting', { path: '/edit-meeting/:id' });
    this.route('create-meeting');
    this.route('register');
    this.route('login');
  });

  exports.default = Router;
});
define('books/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),

    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionAuthenticated: function sessionAuthenticated() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionInvalidated: function sessionInvalidated() {
      this.get('currentUser').resetCurrentUser();
      window.location.replace('/login');
    },
    loadUser: function loadUser() {
      if (this.get('session.isAuthenticated')) {
        this.get('currentUser').load();
      }
    },


    actions: {
      error: function error(_error, transition) {
        if (transition) {
          transition.abort();
        }
        this.intermediateTransitionTo('error', { error: _error.message });
        return true;
      }
    }
  });
});
define('books/routes/books', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: true,
      tags_like: true
    },

    model: function model(_ref) {
      var search = _ref.search,
          tags_like = _ref.tags_like;

      return this.get("store").query("book", { q: search, tags_like: tags_like });
    },


    actions: {
      RouteActionSearch: function RouteActionSearch() {
        this.refresh();
      }
    },

    setupController: function setupController(controller, model) {
      this._super.apply(this, arguments);
      controller._refreshData();
    }
  });
});
define('books/routes/create-book', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
    model: function model() {
      return Ember.Object.create({
        name: "",
        author: "",
        sumPages: 0,
        tags: [],
        averageRating: 0,
        urlCover: "",
        urlDescription: ""
      });
    }
  });
});
define('books/routes/create-meeting', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var meeting;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                meeting = Ember.Object.create({
                                    dateMeeting: "",
                                    reports: []
                                });
                                _context.t0 = Ember.Object;
                                _context.t1 = this.get("store").createRecord("meeting");
                                _context.next = 5;
                                return this.get('store').findAll("book");

                            case 5:
                                _context.t2 = _context.sent;
                                _context.next = 8;
                                return this.get('store').findAll("speaker");

                            case 8:
                                _context.t3 = _context.sent;
                                _context.t4 = {
                                    meeting: _context.t1,
                                    listBook: _context.t2,
                                    listSpeaker: _context.t3
                                };
                                return _context.abrupt('return', _context.t0.create.call(_context.t0, _context.t4));

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function model() {
                return _ref.apply(this, arguments);
            }

            return model;
        }()
    });
});
define('books/routes/create-speaker', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
    model: function model() {
      return Ember.Object.create({
        firstName: "",
        lastName: "",
        patronymic: ""
      });
    }
  });
});
define('books/routes/edit-book', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
    dataService: Ember.inject.service("data"),

    model: function model(_ref) {
      var id = _ref.id;

      return this.get("store").findRecord("book", id);
    }
  });
});
define('books/routes/edit-meeting', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
                var id = _ref.id;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = Ember.Object;
                                _context.next = 3;
                                return this.get("store").findRecord("meeting", id);

                            case 3:
                                _context.t1 = _context.sent;
                                _context.next = 6;
                                return this.get('store').findAll("book");

                            case 6:
                                _context.t2 = _context.sent;
                                _context.next = 9;
                                return this.get('store').findAll("speaker");

                            case 9:
                                _context.t3 = _context.sent;
                                _context.t4 = {
                                    meeting: _context.t1,
                                    listBook: _context.t2,
                                    listSpeaker: _context.t3
                                };
                                return _context.abrupt('return', _context.t0.create.call(_context.t0, _context.t4));

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function model(_x) {
                return _ref2.apply(this, arguments);
            }

            return model;
        }()
    });
});
define('books/routes/edit-speaker', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
    dataService: Ember.inject.service("data"),

    model: function model(_ref) {
      var id = _ref.id;

      return this.get("store").findRecord("speaker", id);
    }
  });
});
define('books/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books/routes/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books/routes/meetings', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin', 'books/controllers/meetings'], function (exports, _authenticatedRouteMixin, _meetings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      page: {
        refreshModel: true
      },
      date: true,
      speaker: true,
      book: true
    },
    model: function model(_ref) {
      var page = _ref.page,
          date = _ref.date,
          speaker = _ref.speaker,
          book = _ref.book;

      var guery = {
        _page: page,
        _limit: _meetings.PER_PAGE
      };

      if (date) {
        guery.date = date;
      }

      if (speaker) {
        guery.speaker = speaker;
      }

      if (book) {
        guery.book = book;
      }

      return Ember.RSVP.hash({
        speakers: this.get("store").findAll("speaker"),
        books: this.get("store").findAll("book"),
        meetings: this.get("store").query("meeting", guery)
      });
    },


    actions: {
      RouteActionSearch: function RouteActionSearch() {
        this.refresh();
      }
    }

  });
});
define('books/routes/register', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      };
    },
    resetController: function resetController(controller, isExiting, transition) {
      this._super.apply(this, arguments);
      if (isExiting) {
        controller.resetErrors();
      }
    }
  });
});
define('books/routes/speakers', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: true
    },

    model: function model(_ref) {
      var search = _ref.search;

      return this.get('store').query('speaker', { q: search });
    },


    actions: {
      RouteActionSearch: function RouteActionSearch() {
        this.refresh();
      }
    }
  });
});
define('books/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    primaryKey: '__PrimaryKey',

    extractId: function extractId(modelClass, resourceHash) {
      var primaryKey = this.get('primaryKey');
      return resourceHash[primaryKey].guid;
    },
    normalize: function normalize(model, hash) {
      return this._super.apply(this, arguments);
    },
    keyForRelationship: function keyForRelationship(key, typeClass, method) {
      if (typeClass === 'belongsTo') {
        return key + 'Id';
      }

      return this._super.apply(this, arguments);
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      //let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
      //return this._super.call(this, relationshipModelName, hash);
      return this._super.apply(this, arguments);
    },
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      // super.serializeBelongsTo(...arguments);
      var key = relationship.key;
      var belongsTo = snapshot.belongsTo(key);

      key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
      json[key] = Ember.isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
  });
});
define("books/serializers/book", ["exports", "books/serializers/application", "ember-data"], function (exports, _application, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      user: {
        serialize: 'id',
        deserialize: 'records'
      }
    },

    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      return hash;
    }
  });
});
define("books/serializers/image", ["exports", "books/serializers/application", "ember-data"], function (exports, _application, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            hash.data.id = hash.data.id.guid;
            return hash;
        }
    });
});
define("books/serializers/meeting", ["exports", "ember-data", "books/serializers/application"], function (exports, _emberData, _application) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      reports: {
        serialize: 'id',
        deserialize: 'records'
      }
    },

    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      return hash;
    }
  });
});
define("books/serializers/report", ["exports", "ember-data", "books/serializers/application"], function (exports, _emberData, _application) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      reports: {
        serialize: 'id',
        deserialize: 'records'
      }
    },

    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      console.log(hash);
      return hash;
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      return this._super.apply(this, arguments);
    }
  });
});
define("books/serializers/speaker", ["exports", "books/serializers/application"], function (exports, _application) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      return hash;
    }
  });
});
define('books/services/-ensure-registered', ['exports', '@embroider/util/services/ensure-registered'], function (exports, _ensureRegistered) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
define('books/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('books/services/can', ['exports', 'ember-can/services/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('books/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('books/services/current-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    user: null,

    load: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.get('store').queryRecord('user', { me: true });

              case 2:
                user = _context.sent;

                this.set('user', user);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _ref.apply(this, arguments);
      }

      return load;
    }(),
    resetCurrentUser: function resetCurrentUser() {
      this.set('user', null);
    }
  });
});
define('books/services/data', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Service.extend({
    getBooks: function getBooks(search, tags_like) {
      var queryParams = "";
      if (search) {
        queryParams = '?q=' + search;
      }

      if (tags_like) {
        queryParams += queryParams ? '&tags_like=' + tags_like : '?tags_like=' + tags_like;
      }

      return fetch(_environment.default.backendUrl + '/books' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getBook: function getBook(id) {
      return fetch(_environment.default.backendUrl + '/books/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteBook: function deleteBook(book) {
      return fetch(_environment.default.backendUrl + '/books/' + book.id, { method: "DELETE" });
    },
    updateBook: function updateBook(book, uploadData) {
      var _this = this;

      return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch(_environment.default.backendUrl + '/books/' + book.id, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(book)
                  });

                case 3:
                  if (!uploadData) {
                    _context.next = 10;
                    break;
                  }

                  uploadData.url = '' + _environment.default.fileUploadURL;
                  _context.next = 7;
                  return uploadData.submit();

                case 7:
                  res = _context.sent;
                  _context.next = 10;
                  return fetch(_environment.default.backendUrl + '/saveURL', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      entityId: book.id,
                      fileName: res.filename
                    })
                  });

                case 10:

                  resolve();
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);

                  reject();

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 13]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    saveFile: function saveFile(uploadData) {
      uploadData.url = _environment.default.fileUploadURL;
      return uploadData.submit();
    },
    createBook: function createBook(book, uploadData) {
      var _this2 = this;

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
          var entity, res;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return fetch(_environment.default.backendUrl + '/books', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(book)
                  }).then(function (response) {
                    return response.json();
                  });

                case 3:
                  entity = _context2.sent;

                  if (!uploadData) {
                    _context2.next = 11;
                    break;
                  }

                  uploadData.url = '' + _environment.default.fileUploadURL;
                  _context2.next = 8;
                  return uploadData.submit();

                case 8:
                  res = _context2.sent;
                  _context2.next = 11;
                  return fetch(_environment.default.backendUrl + '/saveURL', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      entityId: entity.id,
                      fileName: res.filename
                    })
                  });

                case 11:

                  resolve();
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2['catch'](0);

                  reject();

                case 17:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 14]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    getSpeakers: function getSpeakers(search) {
      var queryParams = "";

      if (search) {
        queryParams = '?q=' + search;
      }

      return fetch(_environment.default.backendUrl + '/speakers' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getSpeaker: function getSpeaker(id) {
      return fetch(_environment.default.backendUrl + '/speakers/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteSpeaker: function deleteSpeaker(speaker) {
      return fetch(_environment.default.backendUrl + '/Speakers/' + speaker.id, { method: "DELETE" });
    },
    updateSpeaker: function updateSpeaker(speaker) {
      return fetch(_environment.default.backendUrl + '/speakers/' + speaker.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(speaker)
      });
    },
    createSpeaker: function createSpeaker(speaker) {
      return fetch(_environment.default.backendUrl + '/speakers', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(speaker)
      });
    }
  });
});
define('books/services/g-recaptcha-v3', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha-v3'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('books/services/g-recaptcha', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha'], function (exports, _gRecaptcha) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptcha.default;
    }
  });
});
define('books/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('books/services/logger-error', ['exports', 'books/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    writeError: function writeError(error) {
      var authSession = JSON.parse(window.localStorage['ember_simple_auth-session']);
      return fetch(_environment.default.backendUrl + '/errors', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Basic ' + authSession.authenticated.token
        },
        body: JSON.stringify(error)
      });
    }
  });
});
define('books/services/moment', ['exports', 'ember-moment/services/moment', 'books/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('books/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('books/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('books/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("books/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RpI3HAJy", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"row align-items-center justify-content-center h-100\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/404.gif\"]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/404.hbs" } });
});
define("books/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lzep4/0X", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/logo-dark.png\"]]],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n  \"],[1,[26,\"t\",[\"menu.bookClub\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.desktop\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"meetings\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.meetings\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.speakers\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.books\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[6,\"a\"],[10,\"href\",\"#\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"logout\"],null],null],[8],[1,[26,\"t\",[\"menu.logout\"],null],false],[9],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[4,\"link-to\",[\"register\"],[[\"class\"],[\"nav-link text-info\"]],{\"statements\":[[1,[26,\"t\",[\"menu.register\"],null],false]],\"parameters\":[]},null],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[4,\"link-to\",[\"login\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.login\"],null],false]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"current-user\"],[8],[0,\"\\n      \"],[6,\"select\"],[10,\"id\",\"languageSelect\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeLocale\"],null],null],[8],[0,\"\\n        \"],[6,\"option\"],[10,\"value\",\"en\"],[11,\"selected\",[20,\"isEnglish\"],null],[8],[0,\"Английский\"],[9],[0,\"\\n        \"],[6,\"option\"],[10,\"value\",\"ru\"],[11,\"selected\",[20,\"isRussian\"],null],[8],[0,\"Русский\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/application.hbs" } });
});
define("books/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GklPV4n+", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-book\"],[[\"class\",\"type\",\"title\"],[\"btn btn-outline-primary my-2\",\"button\",\"Добавить книгу\"]],{\"statements\":[[0,\"        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[6,\"input\"],[10,\"class\",\"form-control my-2 search-long\"],[10,\"placeholder\",\"Найти по полям\"],[10,\"aria-label\",\"Найти по полям\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],\"inputHandler\"],null],null],[11,\"value\",[20,\"search\"],null],[10,\"type\",\"search\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"aria-label\",\"value\"],[\"form-control mr-2\",\"search\",\"Поиск по тегам\",\"Найти по тегам\",[22,[\"tags_like\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"actionSearch\"],null],null],[10,\"type\",\"submit\"],[8],[0,\"Поиск\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"book-card\",null,[[\"book\",\"tagName\",\"deleteBook\"],[[21,1,[]],\"\",[26,\"action\",[[21,0,[]],\"deleteBook\",[21,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/books.hbs" } });
});
define('books/templates/components/basic-dropdown-content', ['exports', 'ember-basic-dropdown/templates/components/basic-dropdown-content'], function (exports, _basicDropdownContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
});
define('books/templates/components/basic-dropdown-trigger', ['exports', 'ember-basic-dropdown/templates/components/basic-dropdown-trigger'], function (exports, _basicDropdownTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
});
define('books/templates/components/basic-dropdown', ['exports', 'ember-basic-dropdown/templates/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define("books/templates/components/book-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D3ww94VF", "block": "{\"symbols\":[\"tag\",\"index\"],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[6,\"img\"],[11,\"src\",[26,\"if\",[[22,[\"book\",\"urlCover\"]],[22,[\"book\",\"urlCover\"]],\"images/book-cover.jpg\"],null],null],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"book\",\"name\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[22,[\"book\",\"author\"]],false],[9],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[22,[\"book\",\"sumPages\"]],false],[9],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\":\\n\"],[4,\"each\",[[22,[\"book\",\"tags\"]]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[6,\"span\"],[10,\"class\",\"small\"],[8],[0,\"#\"],[1,[21,1,[]],false],[9],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            Рейтинг:\\n          \"],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[20,\"progressbarStyle\"],null],[10,\"aria-valuenow\",\"25\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[22,[\"book\",\"averageRating\"]],false],[0,\"%\"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n          \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\",[22,[\"book\"]]],null]],null]],null,{\"statements\":[[4,\"link-to\",[\"edit-book\",[22,[\"book\",\"id\"]]],[[\"tagName\",\"type\",\"class\"],[\"button\",\"button\",\"btn btn-edit\"]],{\"statements\":[[0,\"          \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n          \"],[6,\"button\"],[10,\"tagName\",\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[20,\"deleteBook\"],null],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/book-card.hbs" } });
});
define("books/templates/components/book-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q0EDv2oE", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Название\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"Полное название книги\",[22,[\"name\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Автор\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"inputAuthor\",\"Фамилия И.О. автора\",[22,[\"author\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Объем\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"number\",\"form-control form-control-lg\",\"inputPagesCount\",\"Количество страниц книги\",[22,[\"sumPages\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Описание\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"url\",\"form-control form-control-lg\",\"inputDescriptionURL\",\"Ссылка на сайт с описанием книги\",[22,[\"urlDescription\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Обложка\"],[9],[0,\"\\n    \"],[1,[26,\"input-file\",null,[[\"uploadData\",\"uploadDataChanged\",\"tagName\",\"class\"],[[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"uploadDataChanged\"],null],\"div\",\"input-group input-group-lg col-sm-10\"]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Теги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input-tags\",null,[[\"tags\"],[[22,[\"tags\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"type\",\"class\",\"tagName\"],[\"submit\",\"btn btn-outline-secondary btn-lg\",\"button\"]],{\"statements\":[[0,\"      Отмена\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/book-form.hbs" } });
});
define('books/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("books/templates/components/input-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "StBxSsUr", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"label\"],[11,\"class\",[27,[\"custom-file-label form-control-lg\\n      \",[26,\"if\",[[22,[\"isFileChoosen\"]],\"\",\"placeholder-color\"],null]]]],[10,\"for\",\"customFile\"],[10,\"data-browse\",\"Выбрать\"],[8],[1,[20,\"fileName\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"removeFile\"],null],null],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/input-file.hbs" } });
});
define("books/templates/components/input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N8R+yfZG", "block": "{\"symbols\":[\"tag\"],\"statements\":[[2,\" <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"inputPatronymic\\\" placeholder=\\\"#Теги через запятую\\\"> \"],[0,\"\\n\"],[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"style\",\"display: none;\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"  \"],[6,\"option\"],[11,\"value\",[27,[[21,1,[]]]]],[10,\"selected\",\"selected\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/input-tags.hbs" } });
});
define("books/templates/components/input/input-datepicker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0DnOCDh2", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"datepicker date input-group p-0 w-100\"],[8],[0,\"\\n  \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"class\",\"value\",\"disabled\"],[\"text\",[26,\"t\",[\"menu.dateMeeting\"],null],\"form-control meeting-date\",[22,[\"value\"]],[26,\"unless\",[[22,[\"disabled\"]],false,true],null]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n      \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/input/input-datepicker.hbs" } });
});
define("books/templates/components/login-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qISzoH1l", "block": "{\"symbols\":[\"error\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"login\"],null],null],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n    \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[1,[26,\"t\",[\"menu.login\"],null],false],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"text-danger\"],[8],[1,[21,1,[\"detail\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"name@example.com\",[22,[\"email\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"password\",[22,[\"password\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"checkbox mb-3\"],[8],[0,\"\\n        \"],[6,\"label\"],[8],[0,\"\\n            \"],[6,\"input\"],[10,\"value\",\"remember-me\"],[10,\"type\",\"checkbox\"],[8],[9],[1,[26,\"t\",[\"menu.remember\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[10,\"type\",\"submit\"],[8],[1,[26,\"t\",[\"menu.login\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"    \"],[6,\"a\"],[10,\"class\",\"w-100\"],[10,\"href\",\"index.html\"],[8],[1,[26,\"t\",[\"menu.back\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/login-form.hbs" } });
});
define("books/templates/components/meeting/meeting-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ftx//8Ay", "block": "{\"symbols\":[\"report\"],\"statements\":[[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n  \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.dateMeeting\"],null],false],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n      \"],[1,[26,\"input/input-datepicker\",null,[[\"value\",\"disabled\"],[[22,[\"meeting\",\"dateMeeting\"]],true]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-meeting\",[22,[\"meeting\",\"id\"]]],[[\"type\",\"class\"],[\"button\",\"btn btn-edit\"]],{\"statements\":[[0,\"        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[20,\"delete\"],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.listReports\"],null],false],[9],[0,\"\\n\\n  \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"meeting\",\"reports\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"report/report-card\",null,[[\"report\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/meeting/meeting-card.hbs" } });
});
define("books/templates/components/meeting/meeting-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GJ6YpqKk", "block": "{\"symbols\":[\"report\"],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n        \"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                \"],[1,[26,\"input/input-datepicker\",null,[[\"value\"],[[22,[\"meeting\",\"dateMeeting\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.listReports\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addReport\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus-square card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                        \"],[6,\"path\"],[10,\"d\",\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"],[8],[9],[0,\"\\n                        \"],[6,\"path\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"meeting\",\"reports\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"report/report-list\",null,[[\"report\",\"updataReport\",\"deleteReport\"],[[21,1,[]],[26,\"action\",[[21,0,[]],\"updataReport\",[21,1,[]]],null],[26,\"action\",[[21,0,[]],\"deleteReport\",[21,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"meetings\"],[[\"type\",\"class\"],[\"submit\",\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"            Отмена\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"modal-window/confirm\",null,[[\"idModal\",\"modalTitle\",\"save\"],[[22,[\"idModal\"]],[22,[\"modalTitle\"]],[26,\"action\",[[21,0,[]],\"saveReport\"],null]]],{\"statements\":[[0,\"  \"],[1,[26,\"report/report-form\",null,[[\"report\",\"listBook\",\"listSpeaker\"],[[22,[\"reportForm\"]],[22,[\"listBook\"]],[22,[\"listSpeaker\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/meeting/meeting-form.hbs" } });
});
define("books/templates/components/modal-window/confirm", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wc4Jdcl2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"modal fade bd-example-modal-lg\"],[11,\"id\",[20,\"idModal\"],null],[10,\"tabindex\",\"-1\"],[10,\"role\",\"dialog\"],[10,\"aria-labelledby\",\"exampleModalCenterTitle\"],[10,\"aria-hidden\",\"false\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"modal-dialog modal-dialog-centered modal-lg\"],[10,\"role\",\"document\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"modal-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"modal-header\"],[8],[0,\"\\n        \"],[6,\"h5\"],[10,\"class\",\"modal-title\"],[10,\"id\",\"exampleModalLongTitle\"],[8],[1,[20,\"modalTitle\"],false],[9],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n          \"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"×\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"modal-body\"],[8],[0,\"\\n        \"],[13,1],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"modal-footer\"],[8],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"btn btn-secondary\"],[10,\"data-dismiss\",\"modal\"],[10,\"type\",\"button\"],[8],[0,\"Отмена\"],[9],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"save\"],null],null],[10,\"type\",\"button\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/modal-window/confirm.hbs" } });
});
define("books/templates/components/register-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YD3fAPo/", "block": "{\"symbols\":[\"error\",\"error\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveReview\"],null],null],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n    \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[1,[26,\"t\",[\"menu.register\"],null],false],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"text-danger\"],[8],[1,[21,2,[\"detail\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"name@example.com\",[22,[\"email\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"isSubmit\"]]],null,{\"statements\":[[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"text-danger\"],[8],[0,\"\\n            \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"message\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"each\",[[22,[\"errors\",\"email\"]]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"text-danger\"],[8],[1,[21,1,[\"message\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"password\",[22,[\"password\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"isSubmit\"]]],null,{\"statements\":[[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"text-danger\"],[8],[0,\"\\n            \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"message\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"g-recaptcha-v2\",null,[[\"siteKey\",\"verified\",\"expired\",\"reset\"],[[22,[\"siteKeyCaptcha\"]],[26,\"action\",[[21,0,[]],\"verified\"],null],[26,\"action\",[[21,0,[]],\"expired\"],null],[22,[\"reset\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[11,\"disabled\",[20,\"iAmRobot\"],null],[10,\"type\",\"submit\"],[8],[1,[26,\"t\",[\"menu.register\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"    \"],[6,\"a\"],[10,\"class\",\"w-100\"],[10,\"href\",\"index.html\"],[8],[1,[26,\"t\",[\"menu.back\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/register-form.hbs" } });
});
define("books/templates/components/report/report-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I4eeXJNw", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",\"/images/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"report\",\"speaker\",\"firstName\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"name\"]],false],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"author\"]],false],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"menu.ratingBook\"],null],false],[0,\":\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[22,[\"report\",\"book\",\"averageRating\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[22,[\"report\",\"book\",\"averageRating\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"\\n              \"],[1,[22,[\"report\",\"book\",\"averageRating\"]],false],[0,\"%\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n      \"],[6,\"p\"],[8],[0,\"\\n        \"],[1,[22,[\"report\",\"Review\"]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.links\"],null],false],[9],[0,\"\\n      \"],[6,\"a\"],[11,\"href\",[27,[[22,[\"report\",\"URLVideo\"]]]]],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[11,\"href\",[27,[[22,[\"report\",\"URLPresentation\"]]]]],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 z16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/report/report-card.hbs" } });
});
define("books/templates/components/report/report-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fXdKao25", "block": "{\"symbols\":[\"item\",\"item\"],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Спикер\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[6,\"select\"],[10,\"class\",\"form-control form-control-lg\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeSpeaker\"],null],null],[11,\"value\",[22,[\"report\",\"speaker\",\"id\"]],null],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"listSpeaker\"]]],null,{\"statements\":[[0,\"          \"],[6,\"option\"],[11,\"value\",[21,2,[\"id\"]],null],[8],[1,[21,2,[\"firstName\"]],false],[0,\"\\n            \"],[1,[21,2,[\"lastName\"]],false],[0,\"\\n            \"],[1,[21,2,[\"patronymic\"]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Книга\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[20,\"book\"],false],[0,\"\\n      \"],[6,\"select\"],[10,\"class\",\"form-control form-control-lg\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeBook\"],null],null],[11,\"value\",[22,[\"report\",\"book\",\"id\"]],null],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"listBook\"]]],null,{\"statements\":[[0,\"          \"],[6,\"option\"],[11,\"value\",[21,1,[\"id\"]],null],[8],[1,[21,1,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"textarea\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg resizeNone\",\"Отзыв\",[22,[\"report\",\"Review\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Видео\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"url\",\"form-control form-control-lg\",\"Видео\",[22,[\"report\",\"URLVideo\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Презентация\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"laceholder\",\"value\",\"placeholder\"],[\"url\",\"form-control form-control-lg\",\"Полное название книги\",[22,[\"report\",\"URLPresentation\"]],\"Ссылка на сайт с описанием книги\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Рейтинг\\n      книги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"laceholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"Полное название книги\",[22,[\"report\",\"rating_book\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/report/report-form.hbs" } });
});
define("books/templates/components/report/report-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k5OtohFm", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",\"/images/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"report\",\"speaker\",\"firstName\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"name\"]],false],[9],[0,\"\\n      \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"author\"]],false],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n          Оценка:\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[22,[\"report\",\"rating_book\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[22,[\"report\",\"rating_book\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"\\n              \"],[1,[22,[\"report\",\"rating_book\"]],false],[0,\"%\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-4 d-inline-block align-middle\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n      \"],[6,\"p\"],[8],[0,\"\\n        \"],[1,[22,[\"report\",\"Review\"]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter d-inline-block align-middle\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row align-items-center col-md-2\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[11,\"onclick\",[20,\"updataReport\"],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[11,\"onclick\",[20,\"deleteReport\"],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/report/report-list.hbs" } });
});
define("books/templates/components/speaker-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nGUtpx9K", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n      \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"speaker\",\"firstName\"]],false],[0,\"\\n        \"],[1,[22,[\"speaker\",\"lastName\"]],false],[0,\"\\n        \"],[1,[22,[\"speaker\",\"patronymic\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-speaker\",[22,[\"speaker\",\"id\"]]],[[\"tagName\",\"type\",\"class\"],[\"button\",\"button\",\"btn btn-edit\"]],{\"statements\":[[0,\"          \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"          \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[20,\"deleteSpeaker\"],null],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/speaker-card.hbs" } });
});
define("books/templates/components/speaker-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NIOje4CV", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputSurname\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Фамилия\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"inputSurname\",\"Введите фамилию\",[22,[\"lastName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Имя\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"inputName\",\"Введите имя\",[22,[\"firstName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"for\",\"inputPatronymic\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Отчество\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control form-control-lg\",\"inputPatronymic\",\"Введите отчество\",[22,[\"patronymic\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"type\",\"class\"],[\"submit\",\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"      Отмена\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/components/speaker-form.hbs" } });
});
define("books/templates/create-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2apNL3Wc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование книги: Название\"],[9],[0,\"\\n    \"],[1,[26,\"book-form\",null,[[\"book\",\"save\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"createBook\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/create-book.hbs" } });
});
define("books/templates/create-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8H+BXOkD", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Создать встречу\"],[9],[0,\"\\n        \"],[1,[26,\"meeting/meeting-form\",null,[[\"meeting\",\"listBook\",\"listSpeaker\",\"save\",\"saveReport\"],[[22,[\"model\",\"meeting\"]],[22,[\"model\",\"listBook\"]],[22,[\"model\",\"listSpeaker\"]],[26,\"action\",[[21,0,[]],\"updateMeeting\"],null],[26,\"action\",[[21,0,[]],\"saveReport\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/create-meeting.hbs" } });
});
define("books/templates/create-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "O1s5zbCG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование спикера: Имя Фамилия\"],[9],[0,\"\\n    \"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"save\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"createSpeaker\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/create-speaker.hbs" } });
});
define("books/templates/edit-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZmI/aIfn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование книги: Название\"],[9],[0,\"\\n    \"],[1,[26,\"book-form\",null,[[\"book\",\"save\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"updateBook\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/edit-book.hbs" } });
});
define("books/templates/edit-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G63vpvxy", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование встречи\"],[9],[0,\"\\n        \"],[1,[26,\"meeting/meeting-form\",null,[[\"meeting\",\"listBook\",\"listSpeaker\",\"save\",\"saveReport\"],[[22,[\"model\",\"meeting\"]],[22,[\"model\",\"listBook\"]],[22,[\"model\",\"listSpeaker\"]],[26,\"action\",[[21,0,[]],\"updateMeeting\"],null],[26,\"action\",[[21,0,[]],\"saveReport\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/edit-meeting.hbs" } });
});
define("books/templates/edit-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zyd32bhH", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование спикера: Имя Фамилия\"],[9],[0,\"\\n    \"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"save\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"updateSpeaker\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/edit-speaker.hbs" } });
});
define("books/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YHfySnCL", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center justify-content-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/error.jpeg\"]]],[10,\"style\",\"width: 100px;\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/error.hbs" } });
});
define("books/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lUaREqml", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meetings\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.meetings\"],null],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.books\"],null],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.speakers\"],null],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/index.hbs" } });
});
define("books/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bzHJN++w", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center justify-content-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/loading.gif\"]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/loading.hbs" } });
});
define("books/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Wrn/CyAj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n    \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n         \"],[1,[26,\"login-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"login\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/login.hbs" } });
});
define("books/templates/meetings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZfHTPVjz", "block": "{\"symbols\":[\"page\",\"meeting\",\"item\",\"item\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.meetings\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between align-items-end\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-1\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-meeting\"],[[\"class\",\"type\",\"title\"],[\"btn btn-outline-primary my-2\",\"button\",\"Добавить книгу\"]],{\"statements\":[[0,\"        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3 align-top\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n          \"],[6,\"select\"],[10,\"class\",\"selectpicker form-control dropdown-filter-control\"],[11,\"value\",[20,\"speaker\"],null],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeSpeaker\"],null],null],[8],[0,\"\\n            \"],[6,\"option\"],[8],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"speakers\"]]],null,{\"statements\":[[0,\"            \"],[6,\"option\"],[11,\"value\",[27,[[21,4,[\"id\"]]]]],[11,\"selected\",[26,\"eq\",[[22,[\"speaker\"]],[21,4,[\"id\"]]],null],null],[8],[1,[21,4,[\"lastName\"]],false],[0,\"\\n              \"],[1,[21,4,[\"firstName\"]],false],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n          \"],[6,\"select\"],[10,\"class\",\"selectpicker form-control dropdown-filter-control\"],[11,\"value\",[20,\"book\"],null],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeBook\"],null],null],[8],[0,\"\\n            \"],[6,\"option\"],[8],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"books\"]]],null,{\"statements\":[[0,\"            \"],[6,\"option\"],[11,\"value\",[27,[[21,3,[\"id\"]]]]],[11,\"selected\",[26,\"eq\",[[22,[\"book\"]],[21,3,[\"id\"]]],null],null],[8],[1,[21,3,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.dateMeeting\"],null],false],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n          \"],[1,[26,\"input/input-datepicker\",null,[[\"value\"],[[22,[\"date\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto text-right col-filter\"],[8],[0,\"\\n        \"],[6,\"button\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"actionSearch\"],null],null],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"type\",\"button\"],[8],[0,\"\\n          \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-funnel card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z\"],[8],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"clearSearch\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n          \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-x card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"],[8],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\",\"meetings\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"meeting/meeting-card\",null,[[\"meeting\",\"delete\"],[[21,2,[]],[26,\"action\",[[21,0,[]],\"delete\",[21,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n    \"],[6,\"nav\"],[10,\"aria-label\",\"Page navigation example\"],[8],[0,\"\\n      \"],[6,\"ul\"],[10,\"class\",\"pagination justify-content-end\"],[8],[0,\"\\n        \"],[6,\"li\"],[11,\"class\",[27,[\"page-item \",[26,\"if\",[[26,\"eq\",[[22,[\"page\"]],1],null],\"disabled\",\"\"],null]]]],[8],[0,\"\\n          \"],[6,\"a\"],[10,\"class\",\"page-link\"],[11,\"disabled\",[26,\"eq\",[[22,[\"page\"]],1],null],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"back\"],null],null],[10,\"aria-label\",\"Previous\"],[8],[0,\"\\n            \"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"«\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"pages\"]]],null,{\"statements\":[[4,\"link-to\",[\"meetings\",[26,\"query-params\",null,[[\"page\"],[[21,1,[]]]]]],[[\"class\",\"tagName\"],[\"page-item\",\"li\"]],{\"statements\":[[0,\"            \"],[6,\"span\"],[10,\"class\",\"page-link\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"        \"],[6,\"li\"],[11,\"class\",[27,[\"page-item \",[26,\"if\",[[26,\"eq\",[[22,[\"page\"]],[22,[\"pages\",\"length\"]]],null],\"disabled\",\"\"],null]]]],[8],[0,\"\\n          \"],[6,\"a\"],[10,\"class\",\"page-link\"],[11,\"disabled\",[26,\"eq\",[[22,[\"page\"]],[22,[\"pages\",\"length\"]]],null],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"next\"],null],null],[10,\"aria-label\",\"Next\"],[8],[0,\"\\n            \"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"»\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/meetings.hbs" } });
});
define("books/templates/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tVwBy3lB", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n    \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n        \"],[1,[26,\"register-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"saveUser\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/register.hbs" } });
});
define("books/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wXHoLmOh", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-speaker\"],[[\"class\",\"type\",\"title\"],[\"btn btn-outline-primary my-2\",\"button\",\"Добавить спикера\"]],{\"statements\":[[0,\"        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"aria-label\",\"value\"],[\"form-control mr-2 search-long search-only\",\"search\",\"ФИО\",\"Спикер\",[22,[\"search\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"actionSearch\"],null],null],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"speaker-card\",null,[[\"speaker\",\"deleteSpeaker\"],[[21,1,[]],[26,\"action\",[[21,0,[]],\"deleteSpeaker\",[21,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books/templates/speakers.hbs" } });
});
define('books/transforms/date-string', ['exports', 'ember-data/transforms/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _date.default.extend({
    moment: Ember.inject.service(),
    deserialize: function deserialize(serialized) {
      var date = this._super(serialized);
      if (date instanceof Date && !isNaN(date)) {
        var formattedDate = this.get('moment').moment(date).format('YYYY-MM-DD');
        return formattedDate;
      }

      return null;
    },
    serialize: function serialize(deserialized) {
      var deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
      return this._super(deserializedDate);
    }
  });
});
define('books/utils/calculate-position', ['exports', 'ember-basic-dropdown/utils/calculate-position'], function (exports, _calculatePosition) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _calculatePosition.default;
    }
  });
});
define('books/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('books/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('books/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('books/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('books/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('books/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('books/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('books/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('books/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('books/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('books/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('books/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('books/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('books/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('books/validators/messages', ['exports', 'ember-i18n-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('books/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('books/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
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

if (!runningTests) {
  require("books/app")["default"].create({"test":"Hello","name":"books","version":"0.0.0+b5e09115"});
}
//# sourceMappingURL=books.map
