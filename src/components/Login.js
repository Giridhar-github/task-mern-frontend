import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };
  return (
    <div className="w-full flex justify-center mt-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-2/4 border-2 p-10">
          <section className="flex justify-center items-center flex-col text-2xl mb-5">
            <h1 className="flex">
              <FaSignInAlt className="text-4xl me-4" /> Login
            </h1>
            <p>Login and start creating tasks.</p>
          </section>
          <section>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
              <div>
                <input
                  className="w-full border-2 px-2 py-3 rounded-md"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div>
                <input
                  className="w-full border-2 px-2 py-3 rounded-md"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your passwrd"
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-slate-600 text-white px-3 py-2 rounded-lg"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default Login;
