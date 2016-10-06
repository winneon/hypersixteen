'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('base16');

var base = _interopRequireWildcard(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HyperSixteen = function () {
  function HyperSixteen() {
    _classCallCheck(this, HyperSixteen);
  }

  _createClass(HyperSixteen, [{
    key: 'decorateConfig',
    value: function decorateConfig(config) {
      var scheme = base.default;

      if (config.base16 && config.base16.scheme && base[config.base16.scheme]) {
        scheme = base[config.base16.scheme];
      }

      var base16 = Object.assign({}, scheme, config.base16);

      var ansi = {
        black: base16.base00,
        red: base16.base08,
        green: base16.base0B,
        yellow: base16.base0A,
        blue: base16.base0D,
        magenta: base16.base0E,
        cyan: base16.base0C,
        white: base16.base05,
        lightBlack: base16.base02,
        lightRed: base16.base08,
        lightGreen: base16.base0B,
        lightYellow: base16.base0A,
        lightBlue: base16.base0D,
        lightMagenta: base16.base0E,
        lightCyan: base16.base0C,
        lightWhite: base16.base05
      };

      var misc = {
        backgroundColor: base16.base00,
        darkBackgroundColor: this.shade(base16.base00, -0.4),
        foregroundColor: ansi.white,
        cursorColor: ansi.white
      };

      misc.borderColor = misc.darkBackgroundColor;

      var CSS = '\n      .tabs_nav,\n      .tabs_list,\n      .tab_tab:not(.tab_active) {\n          background-color: ' + misc.darkBackgroundColor + ';\n      }\n\n      .tabs_list {\n          border: none;\n      }\n\n      .tab_tab:not(.tab_active) {\n          color: ' + base16.base02 + ';\n      }\n      \n      .tabs_title,\n      .tab_active {\n          background-color: ' + misc.backgroundColor + ';\n          color: ' + misc.foregroundColor + ';\n      }\n\n      .tab_active:before,\n      .tab_icon {\n          display: none;\n      }\n\n      ' + (config.css || '') + '\n    ';

      var termCSS = '\n      /* hyperlinks support */\n      x-screen a {\n        color: ' + ansi.red + ';\n      }\n\n      ' + (config.termCSS || '') + '\n    ';

      return Object.assign({}, config, {
        backgroundColor: misc.backgroundColor,
        foregroundColor: misc.foregroundColor,
        cursorColor: misc.cursorColor,
        borderColor: misc.borderColor,
        colors: ansi,
        css: CSS,
        termCSS: termCSS
      });
    }

    // Credit to http://stackoverflow.com/a/13542669.

  }, {
    key: 'shade',
    value: function shade(color, percent) {
      var f = parseInt(color.slice(1), 16);
      var t = percent < 0 ? 0 : 255;
      var p = percent < 0 ? percent * -1 : percent;

      var r = f >> 16;
      var g = f >> 8 & 0x00FF;
      var b = f & 0x0000FF;

      return '#' + (0x1000000 + (Math.round((t - r) * p) + r) * 0x10000 + (Math.round((t - g) * p) + g) * 0x100 + (Math.round((t - b) * p) + b)).toString(16).slice(1);
    }
  }]);

  return HyperSixteen;
}();

exports.default = HyperSixteen;
//# sourceMappingURL=HyperSixteen.js.map