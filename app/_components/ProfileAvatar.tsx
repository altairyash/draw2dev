"use client";
import { auth } from "@/configs/firebaseConfig";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthContext } from "../provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function ProfileAvatar() {
  const { user } = useAuthContext();
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Auth State Changed:", firebaseUser);
      
      if (firebaseUser) {
        // Ensure latest profile update
        firebaseUser.reload().then(() => {
          console.log("Updated User:", auth.currentUser);
          setProfilePic(auth.currentUser?.photoURL || null);
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const onButtonPress = () => {
    signOut(auth)
      .then(() => {
        router.replace("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  if (loading || !profilePic) return null;

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <img
            src={profilePic}
            alt="profile"
            className="w-[35px] h-[35px] rounded-full"
            referrerPolicy="no-referrer"
          />
        </PopoverTrigger>
        <PopoverContent className="w-[100px] mx-w-sm">
          <Button variant={"ghost"} onClick={onButtonPress}>
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ProfileAvatar;
