import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

const styles = {
  wrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 150px)",
  },
};

export default function RegistrationPage() {
  return (
    <div style={styles.wrap}>
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
}
