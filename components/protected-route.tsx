"use client";

import { useAuthContext } from "@/app/provider";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();
  const [isChecking, setIsChecking] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("Firebase authenticated user:", firebaseUser);
        setIsChecking(false);
      } else {
        console.log("User not authenticated, triggering Firebase login...");
        initiateFirebaseAuth();
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const initiateFirebaseAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Auth successful:", result.user);
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setIsChecking(false);
    }
  };

  if (isChecking) {
    return <div className="text-white text-center mt-10">Authenticating...</div>;
  }

  return <>{children}</>;
}
