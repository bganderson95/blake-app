import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//SELECT GROUP
export const selectGroup = groupId => {
  return {
    type: actionTypes.SELECT_GROUP,
    groupId: groupId
  };
};

//FETCH GROUPS
export const fetchGroupsStart = () => {
  return {
    type: actionTypes.FETCH_GROUPS_START
  };
};

export const fetchGroupsSuccess = groups => {
  return {
    type: actionTypes.FETCH_GROUPS_SUCCESS,
    groups: groups
  };
};

export const fetchGroupsFail = err => {
  return {
    type: actionTypes.FETCH_GROUPS_FAIL,
    err: err
  };
};

export const fetchGroups = () => {
  return dispatch => {
    dispatch(fetchGroupsStart());
    axios
      .get("/groups.json")
      .then(res => {
        const fetchedGroups = [];
        for (let key in res.data) {
          fetchedGroups.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchGroupsSuccess(fetchedGroups));
      })
      .catch(err => {
        dispatch(fetchGroupsFail(err));
        console.log("FETCH GROUPS ERROR: " + err);
      });
  };
};

//CREATE GROUP
export const createGroupStart = () => {
  return {
    type: actionTypes.CREATE_GROUP_START
  };
};

export const createGroupSuccess = () => {
  return {
    type: actionTypes.CREATE_GROUP_SUCCESS
  };
};

export const createGroupFail = err => {
  return {
    type: actionTypes.CREATE_GROUP_FAIL,
    err: err
  };
};

export const createGroup = group => {
  return dispatch => {
    dispatch(createGroupStart());
    console.log(group);
    axios
      .post("/groups.json", group)
      .then(response => {
        console.log(response);
        dispatch(createGroupSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(createGroupFail(err));
      });
  };
};
