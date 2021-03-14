import { modifier } from 'ember-modifier';

export default modifier((element) => {
  /**
   * Based on https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
   */

  element.style.boxSizing = 'border-box';

  const offset = element.offsetHeight - element.clientHeight;
  element.addEventListener('input', () => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight + offset}px`;
  });
});
