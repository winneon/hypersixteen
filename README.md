# hypersixteen

A [base16](https://github.com/chriskempson/base16) loader for [HyperTerm](https://github.com/zeit/hyperterm).

![](https://i.imgur.com/Txrapcf.gif)

## Installation

If you have [hpm](https://github.com/zeit/hpm) installed, then installing is very simple:

```shell
$ hpm install hypersixteen
```

If you do not, edit your `.hyperterm.js` configuration and add `hypersixteen` to the `plugins` array.

## Configuration

hypersixteen defaults to base16's default scheme. To change the scheme, add a `base16.scheme` value into your `.hyperterm.js` configuration, like so:

```javascript
module.exports = {
  ...
  base16: {
    scheme: 'default'
  }
  ...
}
```

The available schemes are shown at the [base16-builder](https://github.com/chriskempson/base16-builder/tree/master/schemes) repository.