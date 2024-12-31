"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const {
  findUserByCredential,
  createUser,
  createWatch,
  findWatchList,
  removeWatch,
} = require("@/db/queries");

async function performLogin(formData) {
  try {
    const credential = {};

    credential.email = formData.get("email");
    credential.password = formData.get("password");

    const found = await findUserByCredential(credential);

    return found;
  } catch (error) {
    throw error;
  }
}

async function registerUser(formData) {
  const user = Object.fromEntries(formData);

  user.agreement = user.agreement === "on";

  try {
    const created = await createUser(user);

    redirect("/login");
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

async function addMovieAction(movieData) {
  try {
    await createWatch(movieData);
  } catch (error) {
    console.error("Error adding watch:", error.message);
    throw error;
  }
}

async function fetchWatchList(userId) {
  try {
    const movies = await findWatchList(userId);
    return movies;
  } catch (error) {
    console.error("Error fetch watch list:", error.message);
    throw error;
  }
}

async function deleteWatch(watchId) {
  try {
    await removeWatch(watchId);
  } catch (error) {
    console.error("Error delete movie form watch list:", error.message);
    throw error;
  }

  revalidatePath("/watchList");
}

export {
  addMovieAction,
  deleteWatch,
  fetchWatchList,
  performLogin,
  registerUser,
};
