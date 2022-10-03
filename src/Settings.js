import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <h3>Settings</h3>
        <div className="factor">
          <label className="label">Factor</label>
          <input
            type="number"
            step="any"
            value={this.props.factor}
            className="factor"
            onChange={this.props.handleChangeFactor}
          />
          <span style={{ marginLeft: 5 }}>kg/km</span>
        </div>
        <div className="detour">
          <label className="label">Detour</label>
          <input
            type="number"
            className="detour"
            value={this.props.detour}
            onChange={this.props.handleChangeDetour}
          />
          <span style={{ marginLeft: 5 }}>kg</span>
        </div>
      </div>
    );
  }
}

export default Settings;
