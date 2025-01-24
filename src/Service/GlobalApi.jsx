import axios from "axios";

const BASE_URL = "http://localhost:8000/api/places";

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data);
export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
