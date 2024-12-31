import { watchListModel } from "@/models/watch-list-model";

const { userModel } = require("@/models/user-model");
const {
  replaceMongoIdInObject,
  replaceMongoIdInAllData,
} = require("@/utils/data-utils");

async function findUserByCredential(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  } else {
    return null;
  }
}

async function createUser(user) {
  return await userModel.create(user);
}

async function createWatch(movieData) {
  return await watchListModel.create(movieData);
}

async function findWatchList(userId) {
  const movies = await watchListModel.find({ user: userId }).lean();

  return replaceMongoIdInAllData(movies, "id");
}

async function removeWatch(watchId) {
  return await watchListModel.findByIdAndDelete(watchId);
}

export {
  createUser,
  createWatch,
  findUserByCredential,
  findWatchList,
  removeWatch,
};
