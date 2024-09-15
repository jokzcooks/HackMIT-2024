import { SignedOut } from "@clerk/clerk-react";
import React from "react";
import { AuthenticationForm } from "../../utils/AuthenticationForm";

const LoginPage = () => {
  return (
    <SignedOut>
      <AuthenticationForm />
    </SignedOut>
  );
};

export default LoginPage;
