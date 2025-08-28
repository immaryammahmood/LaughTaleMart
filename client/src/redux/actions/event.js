import axios from "axios";
import { server } from "../../server";

// Create event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: "eventCreateRequest" });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch({ type: "eventCreateSuccess", payload: data.event });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get all events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAllEventsShopRequest" });

    const { data } = await axios.get(
      `${server}/event/get-all-shop-events/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "getAllEventsShopSuccess",
      payload: data.events || [],
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Delete event of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteEventRequest" });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllEventsRequest" });

    const { data } = await axios.get(`${server}/event/get-all-events`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllEventsSuccess",
      payload: data.allEvents || [],
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};
