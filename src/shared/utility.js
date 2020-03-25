export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const fixTime = time => {
  const elapsedTime = Math.floor((new Date() - new Date(time)) / 60000); //minutes passed
  if (elapsedTime < 1) {
    return "<1 min ago";
  } else if (elapsedTime < 60) {
    return Math.floor(elapsedTime) + " min";
  } else if (elapsedTime / 60 < 24) {
    return Math.floor(elapsedTime / 60) + " hrs";
  } else if (elapsedTime / 60 < 48) {
    return "1 d";
  } else if (elapsedTime / 1440 < 8) {
    return Math.floor(elapsedTime / 1440) + " d";
  } else if (elapsedTime / 10080 < 4) {
    return Math.floor(elapsedTime / 10080) + " w";
  } else if (elapsedTime / 43800 < 12) {
    return Math.floor(elapsedTime / 43800) + " m";
  } else return Math.floor(elapsedTime / 525600 + " y");
};
