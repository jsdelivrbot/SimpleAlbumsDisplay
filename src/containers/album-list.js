import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectAlbum from '../actions/action_select_album'
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
          onClick={() => this.props.selectAlbum(album)}
          className='main-div col-sm-4'>
          <div className='card-1'>
            <img className='album-img' src={album[0].thumbnailUrl}/>
            <div className='album-title'>{album[0].title}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className = 'container'>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectAlbum: selectAlbum, fetchProducts: fetchProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
