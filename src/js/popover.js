export default class Popover {
  constructor() {}

  showPopover(message, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");
    popoverElement.innerHTML = `
      <div class="popover-title">
        <p>${message.title}</p>
      </div>
      <div class="popover-text">
        <p>${message.text}</p>
      </div>
    `;
    document.body.appendChild(popoverElement);

    const { right, top } = element.getBoundingClientRect();
    console.log(right);
    popoverElement.style.left =
      right - element.offsetWidth / 2 - popoverElement.offsetWidth / 2 + "px";
    popoverElement.style.top = top - popoverElement.offsetHeight - 5 + "px";
  }

  toglePopover() {
    const popover = document.querySelector(".popover");
    popover.classList.toggle("hidden");
  }
}
