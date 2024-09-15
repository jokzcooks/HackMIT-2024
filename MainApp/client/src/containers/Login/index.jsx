import { SignedOut } from "@clerk/clerk-react";
import React from "react";
import { AuthForm } from "../../components/AuthForm";

const LoginPage = () => {
  return (
    <SignedOut>
      <AuthForm />
    </SignedOut>
  );
};

export default LoginPage;