import React from 'react';
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
export default class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(e) {

        
        let playlistName = e.target.value;
        console.log(playlistName)
        this.props.onNameChange(playlistName)
    }
    render() {
        return <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>

            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    }
}