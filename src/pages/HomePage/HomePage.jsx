import React from "react";

const styles = {
  container: {
    minHeight: "calc(100vh - 150px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    color: "white",
  },
};

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>{" "}
        </h1>
      </div>
    </>
  );
}
