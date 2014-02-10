# Node Harmony Example

In December 2013, a [new Heroku node buildpack was released](https://blog.heroku.com/archives/2013/12/10/new-node-buildpack) with support for all versions of node, including pre-release versions. This means you can run your ECMAScript 6 Harmony Node.js apps on Heroku today!

Harmony enables features like [block scoping](https://github.com/JustinDrake/node-es6-examples#block-scoping), [generators](https://github.com/JustinDrake/node-es6-examples#generators), [proxies](https://github.com/JustinDrake/node-es6-examples#proxies), [weak maps](https://github.com/JustinDrake/node-es6-examples#weak-maps), etc.

This is a sample app to demonstrate the required steps to set it up on Heroku.

## Steps

- In package.json, set `engines.node` to a newer node version like `0.11.x`
- In package.json, `scripts.start` must run `node` with three flags: `--harmony`, `--use_strict`, and `--harmony_generators`. See [JustinDrake/node-es6-examples](https://github.com/JustinDrake/node-es6-examples) for details.
- To find out what versions of node are currently supported on Heroku, visit [semver.io](http://semver.io/)
- As long as your node app has a `scripts.start` entry, a Procfile is not required to run on Heroku.

## License

[WTFPL](http://wtfpl.org/)