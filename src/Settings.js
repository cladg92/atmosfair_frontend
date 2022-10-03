import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Settings extends Component {
  render() {
    return (
      <Card className="Settings">
        <Card.Body>
          <div className="factor">
            <label className="label">Factor</label>
            <input
              type="number"
              step="any"
              value={this.props.factor}
              className="factor"
              onChange={this.props.handleChangeFactor}
            />
          </div>
          <div className="detour">
            <label className="label">Detour</label>
            <input
              type="number"
              className="detour"
              value={this.props.detour}
              onChange={this.props.handleChangeDetour}
            />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Settings;
