import makeShadow from 'shadow-callbag';

const fromEvent = (node, name, options) => (start, sink) => {
  if (start !== 0) return;
  let disposed = false;
  const shadow = makeShadow('from-event');
  const handler = ev => {
    shadow(1, ev);
    sink(1, ev);
  };

  sink(0, t => {
    if (t !== 2) {
      return;
    }
    disposed = true;
    node.removeEventListener(name, handler, options);
  });

  if (disposed) {
    return;
  }

  node.addEventListener(name, handler, options);
};

export default fromEvent;
