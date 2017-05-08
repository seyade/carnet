import React, { Component } from 'react';

class CarnetNotification extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      notificationText: ''
    };
  }

  render() {
    return (
      <div className="carnet-notification">
        <p>{this.props.notificationText}</p>
      </div>
    );
  }
}

export default CarnetNotification;
