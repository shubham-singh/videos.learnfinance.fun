import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth.context";
import { useSnackbar } from "../snackbar/snackbar.context";
import { signup } from "../utils/server.requests";
import { useLocalisation } from "../localisation/localisation.context";
import { lang } from "../localisation/localisation.data";
import { scrollToTop } from "../utils/function";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { snackbarDispatch } = useSnackbar();
  const { user, authDispatch } = useAuth();
  const { language } = useLocalisation();

  const onChangeHandler = (e) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup(signupInfo, authDispatch, snackbarDispatch);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (user.loggedIn) {
      navigate("/");
    }
  });

  return (
    <div className="flex-column-center form-container">
      <form className="flex-c form-credentials shadow" onSubmit={handleSignup}>
        <h1
          className="heading m-null p-s pointer"
          onClick={() => navigate("/")}
        >
          {lang[language].learnFinance}
        </h1>
        <input
          className="m-xs p-s"
          type="name"
          placeholder={lang[language].firstName}
          name="firstName"
          value={signupInfo.firstName}
          onChange={onChangeHandler}
          required
        />
        <input
          className="m-xs p-s"
          type="name"
          placeholder={lang[language].lastName}
          name="lastName"
          value={signupInfo.lastName}
          onChange={onChangeHandler}
        />
        <input
          className="m-xs p-s"
          type="email"
          placeholder={lang[language].email}
          name="email"
          value={signupInfo.email}
          onChange={onChangeHandler}
          required
        />
        <input
          className="m-xs p-s"
          type="password"
          placeholder={lang[language].password}
          name="password"
          value={signupInfo.password}
          onChange={onChangeHandler}
          required
        />
        <button className="btn btn-classic shadow mt-l" type="submit">
          {lang[language].signup}
        </button>
      </form>
      <p className="mt-xl pointer" onClick={() => navigate("/login")}>
        {lang[language].loginText}
      </p>
    </div>
  );
};

export default Signup;
