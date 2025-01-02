import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice/index";
import { useToast } from "@/hooks/use-toast";

export default function AuthLogin() {
  const initialState = {
    email: "",
    password: "",
  };
  ``;
  const [formData, setFormData] = useState({ initialState });
  const dispatch = useDispatch();
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
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
