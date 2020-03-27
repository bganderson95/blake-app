import React, { Component } from "react";
import axios from "../../axios";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistSearch: "",
      artistResults: [],
      selectedArtist: null,
      trackSearch: "",
      trackResults: [],
      selectedTrack: null
    };
    this.artistSearchHandler = this.artistSearchHandler.bind(this);
    this.trackSearchHandler = this.trackSearchHandler.bind(this);
  }

  //ARTISTS
  artistSearchHandler = event => {
    this.setState({ artistSearch: event.target.value });
    if (this.state.artistSearch.length >= 1) {
      const searchFixed = encodeURIComponent(event.target.value);
      console.log(searchFixed);
      axios
        .get(
          `/v1/search?q=${searchFixed}&type=artist&market=US&limit=10&offset=0`,
          {
            params: {},
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.props.token
            }
          }
        )
        .then(res => {
          console.log(`Axios Call completed: ${res}`);
          console.log(res.data.artists.items);
          this.setState({ artistResults: res.data.artists.items });
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  };

  artistSelectHandler(artist) {
    this.setState({ selectedArtist: artist.name });
  }

  //TRACKS
  trackSearchHandler = event => {
    this.setState({ trackSearch: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ trackResults: [] });
    } else {
      const searchFixed = encodeURIComponent(event.target.value);
      console.log(searchFixed);
      axios
        .get(
          `/v1/search?q=${searchFixed}&type=track&market=US&limit=10&offset=0`,
          {
            params: {},
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.props.token
            }
          }
        )
        .then(res => {
          console.log(`Axios Call completed: ${res}`);
          console.log(res.data.tracks.items);
          this.setState({ trackResults: res.data.tracks.items });
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  };

  trackSelectHandler(track) {
    this.setState({ selectedTrack: track.name });
    //PLAYTRACK
    //data `{\"uris\": [\"spotify:track:${track.id}"]}}`
    axios
      .put(`/v1/me/player/play`, `{"uris": ["spotify:track:${track.id}"]}`, {
        params: {},
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.token
        }
      })
      .then(res => {
        console.log(`Playing: ${res}`);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h4>MY TOKEN: </h4>
          <p style={{ width: "80%" }}>{this.props.token}</p>
          {/*Artist Search */}
          <h4>SEARCH ARTIST</h4>
          <input
            type="text"
            value={this.state.artistSearch}
            placeholder="Search Artists"
            onChange={this.artistSearchHandler}
          />

          <ul>
            {this.state.artistResults.map(res => (
              <li key={res.id} onClick={() => this.artistSelectHandler(res)}>
                {res.hasOwnProperty("images") && res.images.length > 0 ? (
                  <img
                    src={res.images[0].url}
                    style={{ height: "50px", width: "50px" }}
                    alt="img"
                  />
                ) : null}
                {res.name} + {res.id}
              </li>
            ))}
          </ul>
          <h4>Artist: {this.state.selectedArtist}</h4>
          <br></br>

          {/*Track Search */}
          <h4>SEARCH TRACK</h4>
          <input
            type="text"
            value={this.state.trackSearch}
            placeholder="Search Tracks"
            onChange={this.trackSearchHandler}
          />

          <ul>
            {this.state.trackResults.map(res => (
              <li key={res.id} onClick={() => this.trackSelectHandler(res)}>
                {res.album.hasOwnProperty("images") &&
                res.album.images.length > 0 ? (
                  <img
                    src={res.album.images[0].url}
                    style={{ height: "50px", width: "50px" }}
                    alt="img"
                  />
                ) : null}
                {`${res.name}: ${res.artists[0].name}`}
              </li>
            ))}
          </ul>
          <h4>Track: {this.state.selectedTrack}</h4>
        </div>
      </div>
    );
  }
}
export default MainPage;
