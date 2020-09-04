import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // redirect to main page if success
  } catch (error) {
    console.error(error.message);

    // register failure
  }
};
