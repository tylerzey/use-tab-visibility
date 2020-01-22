# Use Tab Visibility

A (simple) zero-dependency way to tell if your React app is being run in the currently active tab.

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/use-tab-visibility) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/use-tab-visibility) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/use-tab-visibility)

Simply import the hook and pull the visible key off of the returned object. This value will let you know if the tab is currently visible.

The React hook is using the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) under the hood is and compatible down to IE 10.

A change in visibility will trigger a re-render.

[View on NPM](https://www.npmjs.com/package/use-tab-visibility)

Basic usage:

```js
import React from 'react';
import useMetadata from 'use-tab-visibility';

function App() {
  const { visible } = useTabVisibility();
  console.warn(visible);

  return <div>This tab is current {visible ? 'visible' : 'not visible'}</div>;
}
```
