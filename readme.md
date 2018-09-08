# vue-tiny-datatable

Display array in a responsive table.

## Getting Started

![demo](example.png?raw=true)

```html
<data-table :items="fruits" :center="false">
```
center binding is optional, set it to true if you want centered content

```js
data: () => {
    return {
        fruits: [
            { name: 'Banana', price: 3.99 },
            { name: 'Kiwi', price: 0.55 },
            { name: '?', price: 33.0 }
        ]
    }
}
```

### Installing

First install with npm
```sh
npm i vue-tiny-datatable
```

Then use plugin

```sh
Vue.use(VueTinyDataTable)
```
