import 'core-js/features/array/reduce';
import 'core-js/features/symbol/iterator';
import 'core-js/features/object/keys';
import 'core-js/features/object/define-properties';

export type Constant<K extends string> = {
  readonly value: K;
  readonly label: string;
};

export function createConst<K extends string, T extends { [k: string]: any }>(
  value: K,
  { label, $label, ...rest }: { label?: string; $label?: string } & Partial<T> = {}
) {
  const constant = {
    label: ($label && rest[$label as keyof typeof rest]) ?? label ?? value,
    value,
    ...rest,
  } as Constant<K> & T;

  Object.defineProperties(constant, {
    toString: {
      value: (): K => value,
    },
    toJSON: {
      value: (): K => value,
    },
  });

  return constant;
}

export function createConstMap<O extends { readonly [k: string]: { readonly [x: string]: any } }>(
  constMap: O,
  $label?: string
) {
  const keys = Object.keys(constMap);
  const l = keys.length;
  const map = keys.reduce(
    (acc, k) => ({ ...acc, [k]: createConst(k, { $label, ...constMap[k] }) }),
    {} as {
      readonly [K in keyof typeof constMap]: K extends string
        ? Constant<K> & Omit<O[K], 'label' | '$label'>
        : never;
    }
  );

  Object.defineProperties(map, {
    [Symbol.iterator]: {
      value: function* () {
        let i = -1;

        while (++i < l) yield map[keys[i]];
      },
    },
  });

  return map as typeof map & Iterable<typeof map extends { [k: string]: infer C } ? C : never>;
}

export function createConstMapStrict<T extends { readonly [x: string]: any }>() {
  return <O extends { readonly [k: string]: T }>(constMap: O, $label?: string) =>
    createConstMap(constMap, $label);
}

export function createConstList<T extends string>(...keys: T[]) {
  type K = typeof keys extends Array<infer Key> ? Key : never;
  type R = { readonly [k in K]: K extends string ? Constant<K> : never };

  return keys.reduce((acc, k) => ({ ...acc, [k]: createConst(k, {}) }), {} as R);
}

export default {
  create: createConst,

  createMap: createConstMap,

  createTypedMap: createConstMapStrict,

  createMapStrict: createConstMapStrict,

  createStrictMap: createConstMapStrict,

  list: createConstList,
};
