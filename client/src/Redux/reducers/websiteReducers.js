import { WEBSITE_DETAILS_FAIL, WEBSITE_DETAILS_REQUEST, WEBSITE_DETAILS_SUCCESS, WEBSITE_LIST_FAIL, WEBSITE_LIST_SUCCESS } from "../constants/websiteConstants";

export const websiteListReducer = (state = { loading: true, websites: [] }, action) => {
  switch (action.type) {
    case WEBSITE_LIST_SUCCESS:
      return { loading: false, websites: action.payload };
    case WEBSITE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const websiteDetailReducer = (state = { loading: true, websites: {} }, action) => {
    switch (action.type) {
      case WEBSITE_DETAILS_REQUEST:
        return { loading: true };
      case WEBSITE_DETAILS_SUCCESS:
        return { loading: false, websites: action.payload };
      case WEBSITE_DETAILS_FAIL:
        return { loading: false, eror: action.payload };
      default:
        return state;
    }
  };