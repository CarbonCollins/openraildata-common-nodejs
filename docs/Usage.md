# Usage

To use this package you need to have [Node.JS](https://nodejs.com) installed and this project added as a dependency to your project using a package manager. This package uses [Yarn](https://yarn.org) as its package manager and is recommended for you to use too, however NPM (which comes bundles with the Node.JS installation) will also work. If you are going to use NPM just replace `add` in any yarn commands with `install`.

## Adding as a dependency

To add `@openrailuk/common` as a dependency to your project, simply run:

```shell
yarn add @openrailuk/common --save
```

This will add this package as a dependency and install any dependencies that are required by it.

## Using the classes in your code

This package provides class models which are intended to be used to hold data from @openrailuk sources, however, they can be used for other purposes too.

In order to construct and use one of the classes it first has to be imported into your application. An example of using the `Via` class is as follows:

```javascript
import { Via } from '@openrailuk/common';

const via = new Via(dataToLoad);
```

If you are using a version of node that does not support imports yet it can be required into your application:

```javascript
const common = require('@openrailuk/common');

const via = new common.Via(dataToLoad);
```

## What models can be used?

There are currently eight classes which can be imported and used from this package. They are accessed the same way in which the `Via` example above is done by replacing `Via` with the model names which are as follows:

* [Association](https://openrail.gitlab.io/docs/uk/common/Association)
* [Location](https://openrail.gitlab.io/docs/uk/common/Location)
* [Schedule](https://openrail.gitlab.io/docs/uk/common/Schedule)
* [Station](https://openrail.gitlab.io/docs/uk/common/Station)
* [StationMessage](https://openrail.gitlab.io/docs/uk/common/StationMessage)
* [TrainOrder](https://openrail.gitlab.io/docs/uk/common/TrainOrder)
* [TrainStatus](https://openrail.gitlab.io/docs/uk/common/TrainStatus)
* [Via](https://openrail.gitlab.io/docs/uk/common/Via)

## What if I want to extend the functionality of these classes?

Extensibility has been kept in mind with these classes (in fact some of the other @openrailuk packages make use of this too). For information on how to do this please see the [Extending Classes](https://openrail.gitlab.io/docs/uk/common/Extending_Classes) page for a detailed explanation.
