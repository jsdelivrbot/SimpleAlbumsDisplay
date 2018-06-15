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
        <li
        key={album.title}
        onClick={() => this.props.selectAlbum(album)}
        className='list-group-item'>{album.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
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
