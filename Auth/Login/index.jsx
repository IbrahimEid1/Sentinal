import React from "react";
import NavbarAuth from "../../src/components/Layout/NavbarAuth";
import LoginForm from "../../src/components/Form/LoginForm";
import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import RegisterForm from "../../src/components/Form/RegisterForm";
const Login = () => {
  const [active, setActive] = useState("Login");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  return (
    <Container className="container mx-auto flex items-center flex-col gap-10  ">
      <NavbarAuth />
      <Typography width={"auto"} sx={{ fontWeight: "500" }} variant={"h3"}>
        {" "}
        Welcome back{" "}
      </Typography>
      <Typography variant="body1" className="text-gray-500 text-center">
        Access the architectural core of your <br /> digital infrastructure.
      </Typography>
      <Container className="flex flex-col items-center  ">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Tabs
            value={active}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login" value="Login" sx={{ width: "200px" }} />
            <Tab label="Register" value="Register" sx={{ width: "200px" }} />
          </Tabs>
          <Box>
            {active === "Login" ? (
              <LoginForm />
            ) : (
              <RegisterForm setActive={setActive} active={active} />
            )}
          </Box>{" "}
        </Box>
      </Container>
    </Container>
  );
};
export default Login;
