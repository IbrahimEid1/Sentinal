import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavbarAuth from "../../src/components/Layout/NavbarAuth";
import LoginForm from "../../src/components/Form/LoginForm";
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Typography width={"auto"} sx={{ fontWeight: "500" }} variant={"h3"}>
          Welcome back
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
      >
        <Typography variant="body1" className="text-gray-500 text-center">
          Access the architectural core of your <br /> digital infrastructure.
        </Typography>
      </motion.div>
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
          <Box className="w-full">
            <AnimatePresence mode="wait">
              {active === "Login" ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 14 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <LoginForm />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <RegisterForm setActive={setActive} active={active} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
export default Login;
