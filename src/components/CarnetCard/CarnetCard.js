import React, { Component } from 'react';
import './CarnetCard.css';

class CarnetCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bookmarkTitle: 'No data',
      url: '',
      info: 'Please add a Carnet bookmark.'
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleEdit() {
    alert('Can edit card!');
  }

  handleRemove() {
    alert('Card should be removed!');
  }

  handleShare(e) {
    e.preventDefault();
    alert('Card info can shared on social media.');
  }

  truncateTitleText(str, length, splice) {
    let titleProps = str;
    let newTitleProp;
    let dots = '...';

    if (titleProps.length > 17) {
      return newTitleProp = titleProps.slice(0, 16) + dots;
    } else {
      return newTitleProp = str;
    }

    console.log('New title: ', newTitleProp);
  }

  truncateUrlText(str, length, splice) {
    let urlProps = str;
    let newUrlProp;
    let dots = '...';

    if (urlProps.length > 27) {
      return newUrlProp = urlProps.slice(0, 16) + dots;
    } else {
      return newUrlProp = str;
    }

    console.log('New Url: ', newUrlProp);
  }

  render() {
    let theBookmarkTitle = this.truncateTitleText(this.props.carnet.bookmarkTitle, 17, 16);
    let theUrl = this.truncateUrlText(this.props.carnet.url, 30, 28);

    console.log('URL: ', theUrl + ' - ' + theUrl.length);

    return (
      <div className="carnet-card col-xs-12">
        <a href="#" className="card-remove-btn" onClick={this.handleRemove}><span className="fa fa-remove"></span></a>
        <a href="#" className="card-edit-btn" onClick={this.handleEdit}><span className="fa fa-pencil"></span></a>
        <div className="card-content-panel">
          <h3 className="card-title" title={this.props.carnet.bookmarkTitle}>{theBookmarkTitle}</h3>
          <p className="card-url">
            <span className="fa fa-globe"></span>
            <a href={this.props.carnet.url}
              title={this.props.carnet.url}
              target="_blank">{theUrl.replace(/(^\w+:|^)\/\//, '')}</a>
          </p>
          <p className="card-info">{this.props.carnet.info}</p>
        </div>
        <div className="card-options-panel">
          <a href="#" className="card-share-btn btn btn-primary" onClick={this.handleShare}>Share <span className="fa fa-share"></span></a>
        </div>
      </div>
    );
  }
}

export default CarnetCard;
