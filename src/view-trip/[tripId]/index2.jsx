import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../Service/Firebas";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import InfoSection from "../Components/InfoSection";
import Hotels from "../Components/Hotels";
import PlacesToVisit from "../Components/PlacesToVisit";

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such Document");
      toast("No trip Found!");
    }
  };
  // console.log(tripId);

  return (
    <div className="p-10 md:px-10 lg:px-44 xl:px-56">
      {/* Information Section  */}
      <InfoSection trip={trip} />
      {/* Recommended Hotels */}
      <Hotels trip={trip} />
      {/* Daily plan */}
      <PlacesToVisit trip={trip} />
      {/* Footer */}
      {/* <Footer trip={trip} /> */}
    </div>
  );
}

export default Viewtrip;
