import axios from "axios";

export const InstanceAuth = axios.create({
    baseURL:"http://localhost:1337/api/"
})