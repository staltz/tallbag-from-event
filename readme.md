# tallbag-from-event

Create a tallbag listenable source from events on a DOM node.

`npm install tallbag-from-event`

## example

Create a listenable source of click events on the `<body>` node.

```js
const fromEvent = require('tallbag-from-event');
const forEach = require('callbag-for-each');

const source = fromEvent(document.body, 'click');

forEach(x => console.log(x))(source); // MouseEvent ...
                                      // MouseEvent ...
```

