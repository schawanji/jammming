import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import './App.css'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{ trackName: 'Tichichema', artist: 'Amara Brown', albumName: 'Tichichema', id: 1 },
            { trackName: 'Do my own Thing', artist: 'Tamy Moyo', albumName: 'Bvudzijena', id: 3 },
            { trackName: 'Vaudze', artist: 'Janet Manyowa', albumName: 'Vaudze', id: 2 },
            ],
            playlistName: 'Sharon',
            playlistTracks: [{ trackName: 'Tichichema', artist: 'Amara Brown', albumName: 'Tichichema', id: 1 },
            { trackName: 'Do my own Thing', artist: 'Tamy Moyo', albumName: 'Bvudzijena', id: 3 },
            { trackName: 'Vaudze', artist: 'Janet Manyowa', albumName: 'Vaudze', id: 2 }]
        }
        
    }
    render() {
        return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">

                    <SearchResults searchResults={this.state.searchResults} />

                    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
                </div>
            </div>
        </div>
    }
}