import { LoginForm } from "../../components/LoginForm/LoginForm";

const styles = {
  wrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 150px)",
  },
};

export default function LoginPage() {
  return (
    <div style={styles.wrap}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
}
