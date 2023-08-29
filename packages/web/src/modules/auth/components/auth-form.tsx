import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomInput } from "../../../shared/components/custom-input";
import { useNavigate } from "react-router-dom";
import { loginAction, registerAction } from "../server";
import { useState } from "react";

export type FormValues = {
  user: string;
  password: string;
};
const registerSchema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().min(8).required(),
});
export const AuthForm = ({
  isLogin,
}: {
  isLogin?: boolean;
}) => {
  const [error, setError] = useState<string | undefined>();
  const navigate = useNavigate();
  const methods = useForm<FormValues>({
    defaultValues: {
      user: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });


  const registerHandler = async (data: FormValues) => {
    setError(undefined);
    try {
      const response = await registerAction(data);
      if (response.status === 201) {
        navigate("/login");
      }
      console.log("response", response);
    } catch (err) {
      const error = err as Record<string, string>;
      // setError(JSON.parse(error).message)
      const errorData = JSON.parse(error.message);
      if(errorData.status === 409){
        setError("User already exists")
      } else {
        setError(errorData.message || 'Something went wrong')
      }

      console.log("Error status:", errorData.status);
      console.log("Error message:", errorData.message);
      // console.log("error", error, error.response, error.data, error.message);
    }
  };

  const loginHandler = async (data: FormValues) => {
    setError(undefined);
    try {
      const response = await loginAction(data);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("resData", resData);
        localStorage.setItem("accessToken", resData.accessToken);
        navigate("/listing");
      }
      console.log("response", response);
    } catch (error) {
      // setError(JSON.parse)
      console.log("error", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(isLogin ? loginHandler : registerHandler)}
        className="w-full max-w-[400px] h-[80vh] mx-auto my-[40px] flex flex-col justify-center items-center gap-[20px] border border-solid border-gray-400 shadow-md rounded-md"
      >
        <CustomInput
          label="text"
          type="user"
          {...methods.register("user")}
          error={methods.formState.errors.user?.message}
        />
        <CustomInput
          label="Password"
          type="password"
          {...methods.register("password")}
          error={methods.formState.errors.password?.message}
        />

        {isLogin ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-transparent text-blue-500 border-b border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-none hover:rounded"
              onClick={() => navigate("/sign-up")}
            >
              Not a member ? Register
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>

            <button
              type="button"
              className="bg-transparent text-blue-500 border-b border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-none hover:rounded"
              onClick={() => navigate("/sign-in")}
            >
              Already a member ? Login
            </button>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
      </form>
    </FormProvider>
  );
};
