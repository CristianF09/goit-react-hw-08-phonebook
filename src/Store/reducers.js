import { combineReducers } from 'redux';

// Example reducer
const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your actions
    default:
      return state;
  }
};

// Combine reducers if you have multiple
export default combineReducers({
  contacts: contactsReducer,
});