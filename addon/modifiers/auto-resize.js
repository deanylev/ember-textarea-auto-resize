import { modifier } from 'ember-modifier';

export default modifier((element) => {
  /**
   * Based on https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
   */

  element.style.boxSizing = 'border-box';

  const offset = element.offsetHeight - element.clientHeight;
  const setHeight = () => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight + offset}px`;
  };

  setHeight();
  element.addEventListener('input', setHeight);
});
