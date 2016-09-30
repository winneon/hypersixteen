'use strict'

import * as base from 'base16'

class HyperSixteen {
  decorateConfig (config) {
    let scheme = base.default

    if (config.base16 && config.base16.scheme && base[config.base16.scheme]) {
      scheme = base[config.base16.scheme]
    }

    let base16 = Object.assign({ }, scheme, config.base16)

    let ansi = {
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
    }

    let misc = {
      backgroundColor: base16.base00,
      darkBackgroundColor: this.shade(base16.base00, -0.4),
      foregroundColor: ansi.white,
      cursorColor: ansi.white
    }

    misc.borderColor = misc.darkBackgroundColor

    let CSS = `
      .tabs_list,
      .tab_tab:not(.tab_active) {
          background-color: ${misc.darkBackgroundColor}
      }

      .tabs_list {
          border: none;
      }

      .tab_tab:not(.tab_active) {
          color: ${base16.base02};
      }
      
      .tabs_title,
      .tab_active {
          background-color: ${misc.backgroundColor};
          color: ${misc.foregroundColor}
      }

      .tab_active:before,
      .tab_icon {
          display: none;
      }

      ${config.css || ''}
    `

    return Object.assign({ }, config, {
      backgroundColor: misc.backgroundColor,
      foregroundColor: misc.foregroundColor,
      cursorColor: misc.cursorColor,
      borderColor: misc.borderColor,
      colors: ansi,
      css: CSS
    })
  }

  // Credit to http://stackoverflow.com/a/13542669.
  shade (color, percent) {
    let f = parseInt(color.slice(1), 16)
    let t = percent < 0 ? 0 : 255
    let p = percent < 0 ? percent * -1 : percent

    let r = f >> 16
    let g = f >> 8 & 0x00FF
    let b = f & 0x0000FF

    return '#' + (0x1000000 + (Math.round((t - r) * p) + r) * 0x10000 + (Math.round((t - g) * p) + g) * 0x100 + (Math.round((t - b) * p) + b)).toString(16).slice(1)
  }
}

export default HyperSixteen
