import { axios  } from "axios";
import {
  APP_DETAILS_FAIL,
  APP_DETAILS_REQUEST,
  APP_DETAILS_SUCCESS,
} from "../constants/appConstants";

export const detailApp = (appId) => async (dispatch) => {
  dispatch({
    type: APP_DETAILS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/apps/${appId}");
    dispatch({
      type: APP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
