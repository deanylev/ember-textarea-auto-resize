import { modifier } from 'ember-modifier';

export default modifier((element) => {
  /**
   * Based on https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
   */

  const htmlElement = element as HTMLElement;
  htmlElement.style.boxSizing = 'border-box';

  const offset = htmlElement.offsetHeight - htmlElement.clientHeight;
  const setHeight = () => {
    htmlElement.style.height = 'auto';
    htmlElement.style.height = `${htmlElement.scrollHeight + offset}px`;
  };

  setHeight();
  htmlElement.addEventListener('input', setHeight);
});
