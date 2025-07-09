# Force Show Hidden Component

## Description

This JavaScript snippet forces any normally hidden component—such as a navbar menu that hides on hover or a toast bar that fades out—to remain visible. It’s generic and configurable, making it easy to apply across different projects and elements.

## Implementation

```js
/**
 * Force shows a hidden element by selector.
 *
 * @param {Object} options - Configuration options.
 * @param {string} options.selector - CSS selector of the target element.
 * @param {string[]} [options.removeAttributes] - List of attributes to remove (e.g., ['aria-hidden']).
 * @param {string[]} [options.removeClasses] - List of CSS classes to strip (e.g., ['hidden', 'is-hidden']).
 * @param {Object} [options.styles] - CSS properties to apply (e.g., { display: 'block', visibility: 'visible', opacity: '1' }).
 */
function forceShowComponent({
  selector,
  removeAttributes = ['aria-hidden'],
  removeClasses = [],
  styles = { display: 'block', visibility: 'visible', opacity: '1' },
}) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`forceShowComponent: No element found for selector "${selector}"`);
    return;
  }
  // Remove specified attributes
  removeAttributes.forEach(attr => element.removeAttribute(attr));
  // Remove specified classes
  removeClasses.forEach(cls => element.classList.remove(cls));
  // Apply inline styles to override hiding logic
  Object.entries(styles).forEach(([prop, value]) => {
    element.style[prop] = value;
  });
}

// Example usage:
forceShowComponent({
  selector: '.MegaMenu',
  removeClasses: ['is-hidden', 'hidden', 'MegaMenu--collapsed'],
});
```

## Usage in Optimizely

1. Open your Optimizely Web experiment and go to the Editor tab.
2. Paste the `forceShowComponent` function into the Custom JavaScript section.
3. Call `forceShowComponent(...)` with the selector and options matching your element.

### Configuration Options

* **selector**: CSS selector targeting the element (required).
* **removeAttributes**: Array of attribute names to strip (default: `['aria-hidden']`).
* **removeClasses**: Array of class names to remove (default: `[]`).
* **styles**: Object of CSS properties to set (default: `{ display: 'block', visibility: 'visible', opacity: '1' }`).

## Customization Examples

* Force-show a toast bar:

  ```js
  forceShowComponent({
    selector: '.ToastBar',
    removeAttributes: ['hidden'],
    styles: { opacity: '1', visibility: 'visible' },
  });
  ```

* Show a collapsed sidebar:

  ```js
  forceShowComponent({
    selector: '#Sidebar',
    removeClasses: ['collapsed', 'sidebar--hidden'],
  });
  ```

## Browser Support

Compatible with modern browsers: Chrome, Firefox, Safari, Edge.

## License

Released under the MIT License.
