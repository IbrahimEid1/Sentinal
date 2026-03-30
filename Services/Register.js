import React from "react";
import { InstanceAuth } from "../src/api/InstanceAuth";

const Register = async (data) => {
  
    const res = await InstanceAuth.post("auth/local/register", data);
    return res.data;
 
};

export default Register;
