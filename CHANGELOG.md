# Change Log for common-nodejs

## [v3.3.3](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.3.3)
* removed next version tag on gitlab ci pipe

## [v3.3.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.3.2)
* Updated documentation in preparation for new docs site
* Updated package homepage to point to new docs site
* Moved project to using shared openrail eslint config

## [v3.3.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.3.2)
* Updated documentation in preparation for new docs site
* Updated package homepage to point to new docs site
* Moved project to using shared openrail eslint config

## [v3.3.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.3.1)
* Fixed issue [#2](https://gitlab.com/openrail/uk/common-nodejs/issues/2)
* added missing changelog entry for v3.3.0

## [v3.3.0](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.3.0)
* Changes babel preset from env to node6`
* fixes issues raised in uk/referencedata-nodejs #1

## [v3.2.3](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.2.3)
* Added slack badge to readme

## [v3.2.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.2.2)
* Removed .gitmodules as its only for dev use
* Removed docs/wiki as this was a sub module for dev

## [v3.2.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.2.1)
* Updated index.mjs to export a default and named exports
* Updated package.json to set main as just index so the .js and .mjs can be auto chosen by the importer

## [v3.2.0](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.2.0)
* Added missing values to schedule model. These include `category`, `passengerService`, and `qTrain`
* Added some accessor functions to schedule model. This include `isQTrain` and `isPassengerService`

* Added slack invite badge to readme
* 
## [v3.1.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.1.2)
* Fixed issued [#1](https://gitlab.com/openrail/uk/common-nodejs/issues/1) regarding no default export

## [v3.1.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.1.1)
* Removed an unused CI job

## [v3.1.0](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.1.0)
* Added Via model to package from referencedata-nodejs
* Updated tests to cover new Via class
* Altered some tests to check for symbol descriptions
* Updated existing classes ot add symbol descriptions

## [v3.0.5](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.5)
* Removed unused dependencies

## [v3.0.4](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.4)
* Added files to .npmignore to remove them from published package

## [v3.0.3](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.3)
* Deployment pipeline changes. No changes to actual code

## [v3.0.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.2)
* Updated CONTRIBUTION.md to reflect new package information
* Updated GitLab ci pipeline to auto deploy to NPM

## [v3.0.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.1)
* Updated incorrect badges on readme

## [v3.0.0](https://gitlab.com/openrail/uk/common-nodejs/tags/v3.0.0)
* Changed package structure to fully use ES6 modules
* Added a babel build to export an ES5 transpiled version of library, his will be discontinues once Node.JS supports ES6 modules without a flag
* Updated tests to be pre defined instead of generated during runtime
* Moved repository to GitLab so various structure changes for that

## [v2.1.2](https://gitlab.com/openrail/uk/common-nodejs/tags/v2.1.2)
* Internal structure updates in preparation for node v10 with imports as well as fixes for incorrectly exported objects.
* Test cases have also been updated to cover these changes.
* Dead code removal and code format changes

## [v2.1.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v2.1.1)
* Updated to make use of Symbols in keeping class data semi-private

## [v2.0.3](https://gitlab.com/openrail/uk/common-nodejs/tags/v2.0.3)
* Added full test suite and fixed issues discovered by the tests
* Removed support for abbreviated values in favour of full names (forgot to remove in v2.0.0 hench patch)

## [v2.0.1](https://gitlab.com/openrail/uk/common-nodejs/tags/v2.0.1)
* Updated README.md to remove WIP flag

## [v2.0.0](https://gitlab.com/openrail/uk/common-nodejs/tags/v2.0.0)
* Added tests for trainStatus.js
* Major version change due to abbreviated values being removed and thus changing API