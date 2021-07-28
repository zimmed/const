@zimmed/const / [Exports](modules.md)

# @zimmed/const

A simple library for managing Constants in project features.

> [Typedocs](docs/modules.md)

![Jest Branch Coverage](coverage/badge-branches.svg)
![Jest Function Coverage](coverage/badge-functions.svg)
![Jest Line Coverage](coverage/badge-lines.svg)
![Jest Statement Coverage](coverage/badge-statements.svg)

## Installation

First, edit existing or create new .npmrc file in your project root, and add:

`@zimmed:registry=https://npm.pkg.github.com`

Then you can use:

`$ npm i --save @zimmed/const`

## Usage

### Problem

Defining lots of groups of constants without any kind of forced structure for value and label.

Typically, you might see something like this:

```typescript
// food/constants/index.js
export * as FRUIT from './fruit';
export * as VEGGIES from './veggies';

// food/constants/fruit.js
export const APPLE = 'apple';
export const LEMON = 'lemon';
export const LIME = 'lime';

export const INFO = {
  [APPLE]: { value: APPLE, label: 'Apple' },
  [LEMON]: { value: LEMON, label: 'Lemon', sour: true },
  [LIME]: { value: LIME, label: 'Lime', sour: true },
};

// food/other.js
import { FRUIT } from './constants';

export function isFoodSour(food) {
  return !!FRUIT.INFO[food.fruit]?.sour;
}

export function getAppleName() {
  return FRUIT.INFO[FRUIT.APPLE].label;
}
```

### Solution

With this library, rather than having a weakly-enforced costant structure, you can enforce a label/value structure (with optional extended properties) where the keys and info do not have to be defined separately, as the const is the full info object, but reduces to the key if cast to string or json-string.

```typescript
// food/constants/index.js
export { default as FRUIT } from './fruit';
export { default as VEGGIES } from './veggies';

// food/constants/fruit.js
import Const from '@zimmed/const';

export default Const.createMap(
  {
    APPLE: { singular: 'Apple', plural: 'Apples' },
    LEMON: { singular: 'Lemon', plural: 'Lemons', label: 'Citron', sour: true },
    LIME: { singular: 'Lime', plural: 'Limes', sour: true },
  },
  'singular'
); // -> second arg is a property name to use as the default label (if none specified)

// food/other.js
import { FRUIT } from './constants';

export function isFoodSour(food) {
  return !!FRUIT[food.fruit]?.sour;
}

export function getAppleName() {
  return FRUIT.APPLE.label;
}
```

### A Common Example

```typescript
import Const from '@zimmed/const';

export default FRUIT = Const.createMap({
  Apple: { color: 'red' },
  Lemon: { color: 'yellow', label: 'Citron', sour: true },
  Lime: { color: 'green', sour: true },
});
```

```typescript
import * as React from 'react';
import FRUIT from './fruit';

export default function MyPie({ onUpdateFood }) {
  const [fruit, setFruit] = React.useState(FRUIT.APPLE);
  const { current: selectFruit } = React.useRef((e) => setFruit(FRUIT[e.target.value]));
  const onConfirm = React.useCallback(() => {
    const body = JSON.stringify({ name: `${fruit.label} Pie`, ingredients: [fruit] });

    // body -> {"name":"Apple Pie","ingredients":["APPLE"]}
    onUpdateFood(body).then(() => alert('Updated!'));
  });

  return (
    <div>
      <h1>My {fruit.label} Pie</h1>
      <h2>It will be {fruit.sour ? 'sour' : 'sweet'}!</h2>
      <label for="fruit-selector">Select a fruit for the pie!</label>
      <select id="fruit-selector" value={fruit.value} onChange={selectFruit}>
        {Array.from(FRUIT).map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button onClick={onConfirm}>Update Food</button>
    </div>
  );
}
```

### As A Simple Enum

```typescript
const FRUIT = Const.list('Apple', 'Lemon', 'Lime', 'Mango', 'Cherry');

console.log(FRUIT.Lemon); // -> Lemon
console.log(FRUIT.Mango.label); // -> Mango
```

### Using Strictly-Typed Extended Data

If you want to enforce that all extended const data meets a particular structure, you can use the aliases `createTypedMap`, `createStrictMap`, etc.

```typescript
const FRUIT = Const.createTypedMap<{ plural?: string; singular: string }>()(
  {
    APPLE: { singular: 'apple', plural: 'apples' },
    LEMON: { singular: 'lemon' },
    LIME: { plural: 'limes' }, // <- Typescript complains that `singular` prop is missing
  },
  'singular'
);
```

### Iterating

```typescript
const fruits = Array.from(FRUIT);

for (const fruit of FRUIT) {
  // iterate over each constant
}
```
