import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums'
import ActiveAlbumReducer from './reducer_active_album'
import productReducer from './reducer_albums';

const rootReducer = combineReducers({
	albums: AlbumsReducer,
	activeAlbum: ActiveAlbumReducer,
	productReducer: productReducer
});

export default rootReducer;
