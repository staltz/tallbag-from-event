import {Source} from 'tallbag';
import {Metadata} from 'shadow-callbag';

export default function fromEvent<T extends keyof HTMLElementEventMap>(
  node: EventTarget,
  name: T,
  options?: boolean | AddEventListenerOptions,
): Source<HTMLElementEventMap[T], Metadata>;
