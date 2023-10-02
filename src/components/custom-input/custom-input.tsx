import { Component, h, State, Prop, Element, Watch } from "@stencil/core";

@Component({
  tag: "custom-input",
  styleUrl: "custom-input.css",
  shadow: true,
})
export class CustomInput {
  @State() inputValue: string = "";
  @Prop() showpassword: boolean = true;
  @Prop() customstyle: string = "";
  @Prop() placeholder: string = "";
  @State() passwordString: string = "";
  @State() isActive: boolean = false;

  @Element() private element!: HTMLElement;

  componentWillLoad() {
    this.isActive = true;
  }

  @Watch("showpassword")
  showPasswordChanged(newValue: boolean, oldValue: boolean) {
    // Handle changes in showpassword - emitted from the HTML page
    if (newValue) {
      const inputField = this.element.shadowRoot.querySelector(
        ".custom-password-input"
      );
      inputField.innerHTML = "•".repeat(this.passwordString.length);
    } else if (oldValue) {
      const inputField = this.element.shadowRoot.querySelector(
        ".custom-password-input"
      );
      inputField.innerHTML = this.passwordString;
    }
  }

  private handleInputChange(event: Event | KeyboardEvent) {
    const disallowedKeys = ["Enter"];
    const keyboardEvent = event as KeyboardEvent;
    if (event instanceof KeyboardEvent) {
      if (disallowedKeys.includes(keyboardEvent.key)) {
        event.preventDefault();
      } else if (this.showpassword) {
        this.moveCaretToEnd();
        if (this.inputValue === this.placeholder) {
          this.inputValue = "";
        }
      }
    }
  }

  private handleClick() {
    this.isActive = false;
    const inputField = this.element.shadowRoot.querySelector(
      ".custom-password-input"
    );

    const currentValue = inputField.innerHTML;

    if (currentValue.trim().toLowerCase() === this.placeholder.toLowerCase()) {
      inputField.innerHTML = "";
    }
  }

  private handleFocus() {
    this.isActive = false;
    const inputField = this.element.shadowRoot.querySelector(
      ".custom-password-input"
    );

    const currentValue = inputField.innerHTML;

    if (currentValue.trim().toLowerCase() === this.placeholder.toLowerCase()) {
      inputField.innerHTML = "";
    }
  }

  private handleBlur() {
    this.isActive = true;
    const inputField = this.element.shadowRoot.querySelector(
      ".custom-password-input"
    );
    const currentValue = inputField.innerHTML.trim();
    currentValue === "" ? (this.isActive = true) : (this.isActive = false);
  }

  private parseStyle(styleString: string) {
    const styles = {};
    styleString.split(";").forEach((style) => {
      const [property, value] = style.split(":");
      if (property && value) {
        styles[property.trim()] = value.trim();
      }
    });
    return styles;
  }

  handleKeyPress(event: KeyboardEvent) {
    const disallowedKeys = ["Enter"];
    const inputElement = event.target as HTMLElement;
    if (disallowedKeys.includes(event.key)) {
      event.preventDefault();
    }
    if (
      this.showpassword &&
      event.key !== "Shift" &&
      event.key !== "Tab" &&
      event.key !== "CapsLock"
    ) {
      event.key === "Backspace"
        ? (this.passwordString = this.passwordString.substring(
            0,
            this.passwordString.length - 1
          ))
        : (this.passwordString += event.key);

      if (this.showpassword) {
        inputElement.innerHTML = "•".repeat(inputElement.innerHTML.length);
      }
      this.moveCaretToEnd();

      const replacePassword = () => {
        inputElement.innerHTML = "•".repeat(inputElement.innerHTML.length);
        this.moveCaretToEnd();
      };
      setTimeout(replacePassword, 500);
    }
  }

  private moveCaretToEnd() {
    const inputField = this.element.shadowRoot.querySelector(
      ".custom-password-input"
    );
    if (inputField) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(inputField);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  render() {
    return (
      <div>
        <div
          class="custom-input"
          style={
            this.customstyle ? { ...this.parseStyle(this.customstyle) } : {}
          }
        >
          <div class="input-container">
            <div
              class={`custom-password-input ${
                this.showpassword ? "visible" : "hidden"
              }`}
              contentEditable
              style={
                this.customstyle ? { ...this.parseStyle(this.customstyle) } : {}
              }
              onInput={(event) => this.handleInputChange(event)}
              onClick={() => this.handleClick()}
              onFocus={this.handleFocus.bind(this)}
              onBlur={() => this.handleBlur()}
              onKeyDown={(event) => this.handleKeyPress(event)}
              innerHTML={
                !this.passwordString && this.inputValue === this.placeholder
                  ? this.placeholder
                  : ""
              }
              id="custom-input-field"
            ></div>
            <div class="place-holder">
              {!this.isActive ? "" : this.placeholder}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
