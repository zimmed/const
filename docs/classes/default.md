[@zimmed/const](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [create](default.md#create)
- [createMap](default.md#createmap)
- [createMapStrict](default.md#createmapstrict)
- [createStrictMap](default.md#createstrictmap)
- [createTypedMap](default.md#createtypedmap)
- [list](default.md#list)

## Constructors

### constructor

• **new default**()

## Properties

### create

▪ `Static` **create**: <K, T\>(`value`: `K`, `__namedParameters`: { `$label?`: `string` ; `label?`: `string`  } & `Partial`<`T`\>) => [`Constant`](../modules.md#constant)<`K`\> & `T`

#### Type declaration

▸ <`K`, `T`\>(`value`, `__namedParameters?`): [`Constant`](../modules.md#constant)<`K`\> & `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `T` | extends `Object` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `K` |
| `__namedParameters` | { `$label?`: `string` ; `label?`: `string`  } & `Partial`<`T`\> |

##### Returns

[`Constant`](../modules.md#constant)<`K`\> & `T`

#### Defined in

[const.ts:77](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L77)

___

### createMap

▪ `Static` **createMap**: typeof [`createConstMap`](../modules.md#createconstmap)

#### Defined in

[const.ts:79](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L79)

___

### createMapStrict

▪ `Static` **createMapStrict**: <T\>() => <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Type declaration

▸ <`T`\>(): <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

##### Returns

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

[const.ts:83](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L83)

___

### createStrictMap

▪ `Static` **createStrictMap**: <T\>() => <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Type declaration

▸ <`T`\>(): <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

##### Returns

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

[const.ts:85](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L85)

___

### createTypedMap

▪ `Static` **createTypedMap**: <T\>() => <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

#### Type declaration

▸ <`T`\>(): <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

##### Returns

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

[const.ts:81](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L81)

___

### list

▪ `Static` **list**: <T\>(...`keys`: `T`[]) => `R`

#### Type declaration

▸ <`T`\>(...`keys`): `R`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `T`[] |

##### Returns

`R`

#### Defined in

[const.ts:87](https://github.com/zimmed/const/blob/f05162f/src/const.ts#L87)
