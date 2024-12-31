export function replaceMongoIdInAllData(arr, newKey = "id") {
  return arr.map((item) => {
    const { _id, ...rest } = item; // Destructure to separate _id
    return { ...rest, [newKey]: _id.toString() }; // Replace _id with the newKey
  });
}

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};
