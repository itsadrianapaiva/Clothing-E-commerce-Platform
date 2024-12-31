import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";


export default function AuthRegister() {
  const initialState = {
    username: "",
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
          Create new account
        </h1>

        <CommonForm
          formControls={registerFormControls}
          buttonText="Sign Up"
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />

        <p className="mt-2">
          Already have an account?
          <Link
            to="/auth/login"
            className="ml-2 font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
