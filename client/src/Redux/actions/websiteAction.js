import { axios  } from "axios";
import {
  WEBSITE_DETAILS_FAIL,
  WEBSITE_DETAILS_REQUEST,
  WEBSITE_DETAILS_SUCCESS,
} from "../constants/websiteConstants";

export const detailWebsite = (WebsiteId) => async (dispatch) => {
  dispatch({
    type: WEBSITE_DETAILS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/websites/${websiteId}");
    dispatch({
      type: WEBSITE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WEBSITE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
