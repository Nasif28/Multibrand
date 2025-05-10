import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router";


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Fake auth
    dispatch(
      loginSuccess({ user: { email: data.email }, token: "fake-token" })
    );
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-xl mb-4">Login</h2>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-2 border mb-2 dark:bg-gray-800"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 dark:bg-gray-800"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
