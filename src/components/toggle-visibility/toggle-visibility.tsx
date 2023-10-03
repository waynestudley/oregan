import { Component, h, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "toggle-visibility",
  styleUrl: "toggle-visibility.css",
  shadow: true,
})
export class ToggleVisibility {
  @State() imageToggle: boolean = false;
  @Event() toggleChange: EventEmitter<boolean>;

  private handleClick() {

    this.imageToggle = !this.imageToggle;
    this.toggleChange.emit(!this.imageToggle);
  }

  render() {
    return (
      <div class="toggle-visible">
        <img
          id="toggle-visible"
          src={
            this.imageToggle ? "/assets/visible.svg" : "/assets/invisible.svg"
          }
          alt={this.imageToggle ? "Visible" : "Invisible"}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}
