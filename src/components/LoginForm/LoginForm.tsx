import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { paths } from "../../paths/paths";
import TextField from "../TextField/TextField";

const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { loginUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const apiResponse = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhdmUiLCJlbWFpbCI6InJhQHZlLmNvbSIsImlkIjoiNjM3MzVlMzNhYWIwN2VjMjUzNzhlOGQxIiwiaWF0IjoxNjY4NTA1MjM4fQ.0Mqf-bDe60thfLz4yyO83nLlM1V_HmwPgOcLO8ucv0A",
    };

    localStorage.setItem("token", apiResponse.token);

    loginUser(apiResponse.token);

    navigate(paths.projectsList);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField type="text" id="username" label="Your username" />
      <TextField type="password" id="password" label="Your password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
