import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { IconContext } from "react-icons";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // console.log(user);
  }, []);
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        // console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
  return (
    <div className="p-3 shadow-smc bg-slate-200 flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full text-black">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trip">
              <Button variant="outline" className="rounded-full text-black">
                My Trips
              </Button>
            </a>

            <Popover>
              <PopoverTrigger className="bg-transparent rounded-full p-0">
                <img
                  src={user?.picture}
                  className="h-[50px] w-[5opx]  rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Dialog>
            <DialogTrigger>
              <Button>Sign IN</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                <img src="/logo.svg" />
              </DialogTitle>
              <DialogHeader>
                <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
                <p>Sign in to the App with Google authentication securely </p>
                <DialogDescription>
                  <Button
                    onClick={login}
                    className="w-full mt-5 flex gap-4 items-center"
                  >
                    <IconContext.Provider
                      value={{
                        style: { height: "1.75rem", width: "1.75rem" },
                      }}
                    >
                      <FcGoogle />
                    </IconContext.Provider>
                    Sign In with Google
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Header;
