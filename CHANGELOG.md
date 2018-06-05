# Change Log for common-nodejs

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