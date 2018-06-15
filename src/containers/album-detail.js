import React, { Component } from 'react';
import {connect} from 'react-redux'
import selectScreen from '../actions/action_select_screen'
import {bindActionCreators} from 'redux'

class AlbumDetail extends Component {
	
	renderItems() {
		return this.props.album.map((album) => {
			return (
				<div
          className='main-div col-sm-4 card-gradient'>
          <div className='card-1 '>
            <img className='album-img' src={album.thumbnailUrl}/>
            <div className='album-title'>{album.title}</div>
          </div>
        </div>
			);
		});
	}

	render() {
		if(this.props.screen == 'ITEM-DETAILS' && this.props.album){
			return (
				<div id="album-items-container" className = 'album-items-container'>
					<a onClick={() => {this.props.selectScreen('HOME-PAGE')}}>Go Back</a>
					<span className="album-items-text"> Album items </span>
					<div className="container album-items">{this.renderItems()}</div>
				</div>
			);
		} else {
			return (
				<span className="album-items-text"> Click on one of the items to see the Albums details </span>
			);
		}
		
	}
}





function mapStateToProps(state) {
  return {
    album: state.activeAlbum,
    screen: state.activeScreen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectScreen: selectScreen}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail)
