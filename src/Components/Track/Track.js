import React from 'react'
import './Track.css'


export default class Track extends React.Component {

  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this)
  }

  renderAction() {

    let isRemoval = false;
    if (isRemoval) {
      return '-'
    } else {
      return '+'
    }

  }

  addTrack() {
    this.props.onAdd(this.props.track)
  }

  render() {
    return <div className="Track">

      <div className="Track-information">
        <h3 > {this.props.track.trackName}</h3>
        <p > {this.props.track.artist} | {this.props.track.albumName}  </p>
      </div>



      <button className="Track-action" onClick={this.addTrack}> {this.renderAction()} </button>
    </div>
  }
}