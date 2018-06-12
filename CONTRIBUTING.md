# How to contribute

Hi!

This document has the general guidelines for contributing to this repo, please have a read.

## Pipelines

This repository uses GitLab pipelines to perform many automated tasks during development and deployment. Results and artefacts from the jobs in these pipelines can be found [here](https://gitlab.com/openrail/uk/common-nodejs/pipelines)

## Testing

Testing is performed with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) and uses the [Istanbul/nyc](https://istanbul.js.org/) reporter. Testing is kicked off either through the automated pipeline when a commit is pushed or when you run it localy using the following command:
```
yarn test
```

If you do contribute to add new features then it is highly recommended that you add any extra test cases needed for new features and ensure that no new security flaws are added (if possible!)

## Linting

Linting is performed on this repository using [ESLint](https://eslint.org/) with the [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration. This can be manualy instigated by running:
```
yarn run lint
```
a [.eslintrc.json](https://gitlab.com/openrail/uk/common-nodejs/blob/master/.eslintrc.json) file is provided for configuring the linter.

## Coverage

This repository also uses [Istanbul/nyc](https://istanbul.js.org/) for test coverage reporting. This is run during the automated pipeline on committing or by manually running it using:
```
yarn run coverage
```

## Compiling

[Babel](https://babeljs.io/) is used to transpile the ES6 source code into ES5 compatible code. This is run automatically during the automated pipeline when committing code, running tests, or it can be manual done by running:
```
yarn run compile
```

## Where do i raise an issue?

Currently we are using the built-in GitLab issue feature, so please submit issues [here](https://gitlab.com/openrail/uk/common-nodejs/issues).

There will be an issue template provided so if you could submit any issues with it then that would be brilliant 👍

## Submitting changes / pull requests

If you have decided you want to help contribute or you have fixed an issue for us then please create a [pull request](https://gitlab.com/openrail/uk/common-nodejs/merge_requests).

A pull request will only be approved into master/release once the pipeline has passed and all tests are present and passing.

## Coding conventions

Most of the code rules can be applied through eslint with a few config extensions and a few modified rules, an .eslintrc.json file is included in the project and the required eslint modules are added as a dev dependency so all you need to do is enable any extensions on your chosen IDE (I normally use VSCode and add the [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)) but for a quick run down:

* Indent using 2 spaces
* JSDoc3 on all methods and functions with descriptions
* lines to be kept to a maximum of 100 in length (where possible)
* Spaces after list items and method parameters (`[1, 2, 3]` and not `[1,2,3]`)
* No trailing comma on objects or list items (`{ a: 1, b: 2, c: 3 }` and not `{ a: 1, b: 2, c: 3, }`)
* Objects and Arrays that contain more than 3 elements / properties should be made multi-line with the trailing comma at the end on the same line with no space prepending it:
```
{
  propA: 1,
  propB: 2,
  propC: 3,
  propD: 4
}
```
and not:
```
{ 
  propA: 1 ,
  propB: 2 ,
  propC: 3 ,
  propD: 4 ,
}
```
or:
```
{ 
  propA: 1
, propB: 2
, propC: 3
, propD: 4
}
```
)

Most of these will be covered by ESLint 👍

## Other info

We have just thrown this doc together recently so there may be errors/issues with this. If you find any then please let us know!

Thanks for reading, and if you decide to contribute then thanks again!
