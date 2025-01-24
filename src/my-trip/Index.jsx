import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../Service/Firebas";
import UserTripCardItem from "./components/UserTripCardItem";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetUserTrips();
  }, []);
  const GetUserTrips = async () => {
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    setIsLoading(false);
    querySnapshot.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">MyTrips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5 ">
        {isLoading ? (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[150px] w-full bg-slate-200 animate-pulse rounded-xl"
            ></div>
          ))
        ) : userTrips?.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCardItem key={index} trip={trip} />
          ))
        ) : (
          <p>No Trips Yet</p>
        )}
      </div>
    </div>
  );
}

export default MyTrips;
