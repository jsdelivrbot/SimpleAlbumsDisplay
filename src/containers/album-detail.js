import React, { Component } from 'react';
import {connect} from 'react-redux'

class AlbumDetail extends Component {
	render() {
		if (!this.props.album) {
			return (
				<div>Click on one of the albums to see details.</div>
			);
		}
		return (
			<div>
				<h4>Details for: {this.props.album.title}</h4>
				<div>Phone: {this.props.album.id}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    album: state.activeAlbum
  };
}

export default connect(mapStateToProps)(AlbumDetail)
