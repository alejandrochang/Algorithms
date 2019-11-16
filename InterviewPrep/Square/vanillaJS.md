# Vanilla JS Notes

### Javascript Gotchas

Javascript Null is an Object

```js
  const foo = null;
  typeof foo; // 'object'
```

Nan - NotANumber
```js
  typeof NaN === 'number'; // true

  Number.isNan(5) // more realiable than NaN
```

ECMAScript is loosely typed languag3e
