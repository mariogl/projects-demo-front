import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { paths } from "../../paths/paths";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { loginUserApi } = useApi();

  const initialCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (await loginUserApi(credentials)) {
      navigate(paths.projectsList);
    }
  };

  const changeCredentials = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        type="text"
        id="username"
        label="Your username"
        onChange={changeCredentials}
      />
      <TextField
        type="password"
        id="password"
        label="Your password"
        onChange={changeCredentials}
      />
      <Button type="submit" variant="primary" block={true}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
