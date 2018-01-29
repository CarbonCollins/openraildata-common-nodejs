# How to contribute

Hi!

This document has the general guidelines for contributing to this repo, please have a read.

## Testing

Testing is performed with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) and uses the istanbul reporter. The repo should be linked to several services including: [Travis CI](https://travis-ci.org/), [CodeClimate](https://codeclimate.com/), and [snyk](https://snyk.io/). These are used for testing the functionality, maintainability, and security of the repo.

If you do contribute to add new features then it is highly recomended that you add any extra test cases needed for new features and ensure that no new security flaws are added (if possible!)

## Where do i raise an issue?

Currently we are using the built-in github issue feature, so please submit issues there.

There will be an issue template provided so if you could submit any issues with it then that would be brilliant 👍

## Submitting changes / pull requests

If you have decided you want to help contibute or you have fixed an issue for us then please create a pull request.

* If it's attached to an issue then please also include the issue number in the title as: `'Fix for #123'`
* If it's a new feature please raise as: `'Feature short_summary'`
* If it's anything else then we leave it up to your discretion (Just make it easy to understand) 

In all pull requests please include a full description of whats in it e.g:

* What it is fixing and how
* Why this feature should be added
* Any other relevant information

Any of the following are much appreciated in a pull request:

* examples of how to use a new feature
* tests to cover new features (if applicable)

A pull request will only be approved once all intergrations ([Travis CI](https://travis-ci.org/), [CodeClimate](https://codeclimate.com/), and [snyk](https://snyk.io/)) have passed unless it is being merged into its own branch (non master/release)

## Coding conventions

Most of the code rules can be applied through eslint with a few config extensions and a few modified rules, an .eslintrc.json file is included in the project and the required eslint modules are added as a dev dependancy so all you need to do is enable any extensions on your chosen IDE (I normaly use VSCode and add the [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)) but for a quick rundown:

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
