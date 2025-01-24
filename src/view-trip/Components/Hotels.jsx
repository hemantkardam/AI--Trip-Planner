/* eslint-disable react/prop-types */
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  // console.log(trip?.tripData);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
export default Hotels;
