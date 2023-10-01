import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {
  @State() inputValue: string = 'password';
  @Prop() customLabel: string = '' as string;
  @Prop() showPassword: boolean = true;
  @Prop() customstyle: string = 'color: orange;';

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLElement;
    const typedValue = inputElement.textContent || '';
    this.inputValue = this.showPassword ? typedValue : '*'.repeat(typedValue.length);
  }

  render() {
    if (this.customstyle) {
      console.log('YES');
    } else {
      console.log('NO');
    }
    return (
      <div>
        <div class="custom-input" style={this.customstyle ? { ...this.parseStyle(this.customstyle) } : {}}>
          <div class="input-container">
            <label>{this.customLabel}</label>
            <div
              class={`custom-password-input ${this.showPassword ? 'visible' : 'hidden'}`}
              contentEditable
              style={this.customstyle ? { ...this.parseStyle(this.customstyle) } : {}}
              onInput={event => this.handleInputChange(event)}
              innerHTML={this.showPassword ? this.inputValue : '*'.repeat(this.inputValue.length)}
              id="custom-input-field"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  private parseStyle(styleString: string) {
    const styles = {};
    styleString.split(';').forEach(style => {
      const [property, value] = style.split(':');
      console.log('!!!', property);
      if (property && value) {
        styles[property.trim()] = value.trim();
      }
    });
    return styles;
  }
}
