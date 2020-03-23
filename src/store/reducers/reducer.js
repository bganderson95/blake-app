import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  selectedGroup: null
};

const selectGroup = (state, action) => {
  return updateObject(state, {
    selectedGroup: action.group
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GROUP:
      return selectGroup(state, action);
    default:
      return state;
  }
};

export default reducer;
