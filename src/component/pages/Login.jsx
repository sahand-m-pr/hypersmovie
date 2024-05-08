import { useContext } from "react";
import { UserContext } from "../../context/User";

export default function Login() {
  const { login , session } = useContext(UserContext);
  function handleLogin(e) {
    e.preventDefault();

    const { username, password } = e.target.elements;
    login(username.value, password.value);
  }
  return (
    <div className="flex gap-4 mt-4 mb-4 flex-col justify-center container w-full  items-center">
      <h1>login page</h1>
      <form
        className="flex flex-col text-black gap-8"
        noValidate
        onSubmit={handleLogin}
      >
        <input
          className="p-2"
          type="text"
          placeholder="enter your username"
          name="username"
        />
        <input
          className="p-2"
          type="password"
          placeholder="enter your password"
          name="password"
        />
        <input type="submit" className="text-white" value="login" />
      </form>

      <div></div>
    </div>
  );
}
