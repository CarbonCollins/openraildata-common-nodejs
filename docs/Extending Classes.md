# Extending Classes

Extensibility has been kept in mind with this package as to allow you to customise and change the functionality as required for your application. All classes that are exported from this package provide mixin functionality at the import level so that any extended functionality is available anywhere in your application. This is all handled internally within this package so all you have to do is provide a mixin function.

## Using a mixer

Mixers are provided for all classes that are exported by this package anf provide a means for you to `mixin` your own properties and methods into the classes provided by `@openrailuk/common`. An example of a mixer function that adds the property `test` as well as adding a toggle function into the `Association`. **This should all be done before any other initialisation in your application**:

```javascript
import { Association, associationMixer } from '@openrailuk/common';

const sTest = Symbol('test');

function testMixin(SuperClass) {
  return class Association extends SuperClass {
    constructor(...args) {
      super(...args);

      this[sTest] = true;
    }

    get test() {
      return this[sTest] || false;
    }

    toggleInternalValue() {
      this[sTest] = !this[sTest];
    }
  }
}

associationMixer(testMixin);

// your application

```

You might ask, why does the example use a Symbol as the key inside the extended class? This is to prevent accidential conflicts with internal values when extending the classes functionality. This is because your application may not be the only thing extending functionality (at a minimum other @openrailuk packages extend the classes too). Symbols help to mitigate this issue as no two Symbols have the same value, even when they have the same description. This allows your application code to remain seperate from others and for node to throw an error if you attempt to set two of the same getters/setters which are already defined.

## what if I want to access the internal values of the existing class?

You might have an occasion where you need to modify the internal values of the existing class, and because Symbols are used there would not be an easy way of determining what key to use. To get around this a 2nd argument is passed into the mixer function which provides a map of all symbols used by the base class (this excludes any symbols added by other mixers. Raise a request if this is something you want though). An example of how to use it is as follows:

```javascript
import { Association, associationMixer } from '@openrailuk/common';

function testMixin(SuperClass, symbols) {
  return class Association extends SuperClass {
    isMainAString() {
      return typeof this[symbols.get('main')] === 'string';
    }
  }
}

associationMixer(testMixin);

```

The available symbols in the map can be determined from the individual class documentation.

## Any other information

This is all there is too it. It is just class extensibility using ES6 mixins with some fancy functions to do it.