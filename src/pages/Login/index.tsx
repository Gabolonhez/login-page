import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import { Container, LoginContainer, Column, Spacing, Title, ErrorText } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useState } from "react";



const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const mockLogin = (email: string, password: string): boolean => {
  return email === "gbf@gmail.com" && password === "12345678";
}

const Login = () => {
    useForm();
    const [loginError, setLoginError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema) as any,
    mode: "onBlur", 
    defaultValues, 
    reValidateMode: "onChange", 
  });

  const onSubmit = (data: IFormLogin) => {
    const success = mockLogin(data.email, data.password);
    if (success) {
      alert("Login realizado com sucesso");
      setLoginError("");
    } else {
      setLoginError("E-mail ou senha inválidos");
      
    }
  }
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="E-mail" control={control} name="email"
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          {loginError && <ErrorText>{loginError}</ErrorText>}
          <Button title="Entrar"  disabled={!isValid} />
          </form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;