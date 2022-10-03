import React, { Component } from "react";
import { Card, InputGroup, Form } from "react-bootstrap";

class Settings extends Component {
  render() {
    return (
      <Card className="Settings">
        <Card.Header className="card-header">Settings</Card.Header>
        <Card.Body className="card-settings">
          <div className="factor">
            <label className="label">Factor</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                step="any"
                value={this.props.factor}
                className="factor"
                onChange={this.props.handleChangeFactor}
              />
              <InputGroup.Text>kg/km</InputGroup.Text>
            </InputGroup>
          </div>
          <div className="detour">
            <label className="label">Detour</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                className="detour"
                value={this.props.detour}
                onChange={this.props.handleChangeDetour}
              />
              <InputGroup.Text>km</InputGroup.Text>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Settings;
