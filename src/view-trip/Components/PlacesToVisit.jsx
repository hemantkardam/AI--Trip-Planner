import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <div>
              <h2 className="font-medium text-lg ">Day {item.day}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {item?.plan?.map((place, index) => (
                  <div key={index} className="my-3">
                    <PlaceCardItem place={place} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
