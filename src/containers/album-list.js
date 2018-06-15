import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectAlbum from '../actions/action_select_album'
import selectScreen from '../actions/action_select_screen'
import {bindActionCreators} from 'redux'
import fetchProducts from "../actions/fetching";

class AlbumList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }


  renderList() {
    return this.props.albums.items.map((album) => {
      return (
        <div key={album[0].albumId}
          onClick={() => {this.props.selectAlbum(album); this.props.selectScreen("ITEM-DETAILS")}}
          className='main-div col-sm-4 card-gradient'>
          <div className='card-1 '>
            <img className='album-img' src={album[0].thumbnailUrl}/>
            <div className='album-title'>{album[0].title}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    if(this.props.screen == 'HOME-PAGE' || !this.props.screen){
      return (
        <div className = 'container'>
          <div id="album-home">
            <div>
              {this.renderList()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className = 'container'>
          
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
    screen: state.activeScreen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectScreen: selectScreen, selectAlbum: selectAlbum, fetchProducts: fetchProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
