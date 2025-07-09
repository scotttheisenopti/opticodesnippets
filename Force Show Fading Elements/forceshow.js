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