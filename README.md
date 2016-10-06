# hypersixteen

A [base16](https://github.com/chriskempson/base16) loader for [Hyper](https://github.com/zeit/hyper).

![](https://i.imgur.com/OkeSb5G.gif)

## Installation

If you have [hpm](https://github.com/zeit/hpm) installed, then installing is very simple:

```shell
$ hpm install hypersixteen
```

If you do not, edit your `.hyper.js` configuration and add `hypersixteen` to the `plugins` array.

## Configuration

hypersixteen defaults to base16's default scheme. To change the scheme, add a `base16.scheme` value into your `.hyperterm.js` configuration. You can also change individual base16 values (00, 01, 02, etc.) in the same fashion.

```javascript
module.exports = {
  config: {
	...
    base16: {
      scheme: 'default' // scheme name
      base00: '#000000' // manually setting the base00 value to black
    }
    ...
  }
}
```

The available schemes are shown at the [base16-builder](https://github.com/chriskempson/base16-builder/tree/master/schemes) repository.