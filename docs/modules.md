[@zimmed/const](README.md) / Exports

# @zimmed/const

## Table of contents

### Namespaces

- [createConstMap](modules/createConstMap.md)

### Classes

- [default](classes/default.md)

### Type aliases

- [Constant](modules.md#constant)

### Functions

- [createConst](modules.md#createconst)
- [createConstList](modules.md#createconstlist)
- [createConstMap](modules.md#createconstmap)
- [createConstMapStrict](modules.md#createconstmapstrict)

## Type aliases

### Constant

Ƭ **Constant**<`K`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `K` |

#### Defined in

[const.ts:6](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L6)

## Functions

### createConst

▸ **createConst**<`K`, `T`\>(`value`, `__namedParameters?`): [`Constant`](modules.md#constant)<`K`\> & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `K` |
| `__namedParameters` | { `$label?`: `string` ; `label?`: `string`  } & `Partial`<`T`\> |

#### Returns

[`Constant`](modules.md#constant)<`K`\> & `T`

#### Defined in

[const.ts:11](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L11)

___

### createConstList

▸ **createConstList**<`T`\>(...`keys`): `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `T`[] |

#### Returns

`R`

#### Defined in

[const.ts:66](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L66)

___

### createConstMap

▸ **createConstMap**<`O`\>(`constMap`, `$label?`): { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constMap` | `O` |
| `$label?` | `string` |

#### Returns

{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Defined in

[const.ts:33](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L33)

___

### createConstMapStrict

▸ **createConstMapStrict**<`T`\>(): <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Returns

`fn`

▸ <`O`\>(`constMap`, `$label?`): { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `constMap` | `O` |
| `$label?` | `string` |

##### Returns

{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Defined in

[const.ts:61](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L61)
