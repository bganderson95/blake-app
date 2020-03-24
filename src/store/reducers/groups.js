import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  groups: [],
  selectedGroup: null,
  loading: false
};

//SELECT GROUP
const selectGroup = (state, action) => {
  return updateObject(state, {
    selectedGroup: action.groupId
  });
};

//FETCH GROUPS
const fetchGroupsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const fetchGroupsFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchGroupsSuccess = (state, action) => {
  return updateObject(state, {
    groups: action.groups,
    loading: false
  });
};

//CREATE GROUP
const createGroupStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const createGroupFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const createGroupSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //SELECT GROUP
    case actionTypes.SELECT_GROUP:
      return selectGroup(state, action);
    //CREATE GROUP
    case actionTypes.CREATE_GROUP_START:
      return createGroupStart(state, action);
    case actionTypes.CREATE_GROUP_FAIL:
      return createGroupFail(state, action);
    case actionTypes.CREATE_GROUP_SUCCESS:
      return createGroupSuccess(state, action);
    //FETCH GROUP
    case actionTypes.FETCH_GROUPS_START:
      return fetchGroupsStart(state, action);
    case actionTypes.FETCH_GROUPS_FAIL:
      return fetchGroupsFail(state, action);
    case actionTypes.FETCH_GROUPS_SUCCESS:
      return fetchGroupsSuccess(state, action);
    //DEFAULT
    default:
      return state;
  }
};

export default reducer;
