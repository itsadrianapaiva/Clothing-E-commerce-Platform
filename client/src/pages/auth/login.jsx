import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";

export default function AuthLogin() {
  const initialState = {
    email: "",
    password: "",
  };
  ``;
  const [formData, setFormData] = useState({ initialState });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
          Sign in to your account
        </h1>

        <CommonForm
          formControls={loginFormControls}
          buttonText="Sign In"
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />

        <p className="mt-2">
          Don&apos;t have an account?
          <Link
            to="/auth/register"
            className="ml-2 font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
