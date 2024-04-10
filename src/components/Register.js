import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, message, isSuccess, navigate, dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password mismatch !");
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="w-full flex justify-center mt-4">
      <div className="w-2/4 border-2 p-10">
        <section className="flex justify-center items-center flex-col text-2xl mb-5">
          <h1 className="flex">
            <FaUser className="text-4xl me-4" /> Register
          </h1>
          <p>Create an account</p>
        </section>
        <section>
          <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
            <div>
              <input
                className="w-full border-2 px-2 py-3 rounded-md"
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
            <div>
              <input
                className="w-full border-2 px-2 py-3 rounded-md"
                type="email"
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
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
            <div>
              <input
                className="w-full border-2 px-2 py-3 rounded-md"
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm your password"
                onChange={onChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-2 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
