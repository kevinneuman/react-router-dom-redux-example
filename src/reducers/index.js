import { combineReducers } from 'redux';

import page from './page';
import counter from './counter';

export default combineReducers({
    page,
    counter
});
