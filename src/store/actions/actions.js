import * as actionTypes from "./actionTypes";

export const selectGroup = group => {
  return {
    type: actionTypes.SELECT_GROUP,
    group: group
  };
};
