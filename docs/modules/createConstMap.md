[@zimmed/const](../README.md) / [Exports](../modules.md) / createConstMap

# Namespace: createConstMap

## Table of contents

### Variables

- [strict](createConstMap.md#strict)
- [typed](createConstMap.md#typed)

## Variables

### strict

• **strict**: <T\>() => <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

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

___

### typed

• **typed**: <T\>() => <O\>(`constMap`: `O`, `$label?`: `string`) => { readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} & `Iterable`<{ readonly[K in string \| number \| symbol]: K extends string ? Constant<K\> & Omit<O[K], "label" \| "$label"\> : never} extends { [k: string]: infer C;  } ? `C` : `never`\>

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
