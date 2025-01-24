/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../Service/GlobalApi";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotel_name,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel.hotel_name +
          "," +
          hotel?.address
        }
      >
        <div className="hover:scale-105 transition-all mb-20 cursor-pointer">
          <img
            src={photoUrl || "/placeHolder.png"}
            className="rounded-xl h-[180px] w-full object-cover "
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium ">{hotel.hotel_name}</h2>
            <h2 className="text-xs text-gray-500 ">📍{hotel?.address}</h2>
            <h2 className="text-sm">💰{hotel?.price}</h2>
            <h2 className="text-sm">⭐{hotel?.rating}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCardItem;
