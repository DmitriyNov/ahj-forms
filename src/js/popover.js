export default class Popover {
  constructor() {
  }

  showPopover(message, element) {
console.log('ок')

    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover')
    popoverElement.innerHTML = `
      <h4 class="">
        ${message.title}
      <h4>
      <p class="">
      ${message.text}
      <p>
    `

    document.body.appendChild(popoverElement);

    const { right, top } = element.getBoundingClientRect();
    popoverElement.style.left = right + element.offsetWidth / 2 - popoverElement.offsetWidth / 2 + 'px';
    popoverElement.style.top = top + 5 + 'px';
  }
}