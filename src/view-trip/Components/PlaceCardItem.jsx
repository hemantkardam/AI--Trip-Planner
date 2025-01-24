import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../Service/GlobalApi";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.place_name,
    };
    GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      target="_blank"
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        place.place_name +
        "," +
        place?.address
      }
    >
      <div className="shadow-md border rounded-xl mt-2 p-3  flex hover:scale-105 transition-all cursor-pointer gap-5 hover:shadow-md">
        <img
          src={photoUrl || "/placeHolder.png"}
          className="w-[150px] h-[100px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-sm ">{place.place_name}</h2>
          <p>{place.ticket_pricing}</p>
          <h2 className="font-medium text-sm mt-3 text-orange-600">
            🕓 {place.time_travel}
          </h2>
          {/* <Button className="" size="small">
          <FaMapLocationDot />
          </Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
