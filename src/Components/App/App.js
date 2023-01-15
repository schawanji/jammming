import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import './App.css'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                { trackName: 'Tichichema', artist: 'Amara Brown', albumName: 'Tichichema', id: 1 },
                { trackName: 'Do my own Thing', artist: 'Tamy Moyo', albumName: 'Bvudzijena', id: 3 },
                { trackName: 'Vaudze', artist: 'Janet Manyowa', albumName: 'Vaudze', id: 2 },
                { trackName: 'Stay with me', artist: 'Anatora', albumName: 'Stay with me', id: 4 },
                { trackName: 'Mama', artist: 'Anita Jaxson', albumName: 'Anita Jaxson', id: 5 },
                { trackName: 'Shoko Renyu', artist: 'Janet Manyowa', albumName: 'WANQOBA concert', id: 6 }
            ],
            playlistName: `Sharon's Playlist`,
            playlistTracks: [

            ]
        }

        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
        this.updatePlaylistName = this.updatePlaylistName.bind(this)
        this.savePlaylist = this.savePlaylist.bind(this)
        this.search = this.search.bind(this)

    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return
        }
        tracks.push(track)
        this.setState({ playlistTracks: tracks })
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
        this.setState({ playlistTracks: tracks })
    }
    updatePlaylistName(name) {
        this.setState({ playlistName: name })

    }
    savePlaylist() {
        alert('it works correctly')
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
        console.log(term)
    }
    render() {
        return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar
                    onSearch={this.search}
                />
                <div className="App-playlist">

                    <SearchResults
                        searchResults={this.state.searchResults}
                        onAdd={this.addTrack}
                    />

                    <Playlist
                        playlistName={this.state.playlistName}
                        playlistTracks={this.state.playlistTracks}
                        onRemove={this.removeTrack}
                        onNameChange={this.state.playlistName}
                        onSave={this.savePlaylist}
                    />

                </div>
            </div>
        </div>
    }
}