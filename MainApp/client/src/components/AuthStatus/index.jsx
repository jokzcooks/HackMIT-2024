import { useAuth } from "@clerk/clerk-react";
import React from "react";

const AuthStatus = () => {
  const { isLoaded, isSignedIn, user } = useAuth();

  // If Clerk hasn't finished loading, show a loading indicator or nothing.
  if (!isLoaded) {
    return <p>Loading...</p>; // Optionally replace with a spinner or skeleton loader
  }

  return (
    <div>
      {isSignedIn ? (
        <p>Welcome, {user?.fullName || 'User'}!</p> // Handle case where fullName might be null
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default AuthStatus;