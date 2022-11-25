import axios from "axios";

export const login = (username: string, password: string): string => {
    if (username === 'admin' && password === 'password') {
        return "success";
    } else {
        return "Please enter correct username & password."
    }
}

export const loginApi = async (email: string, password: string) => {
    const data = JSON.stringify({
        "email": `${email}`,
        "password": `${password}`
    });

    const res: any = await axios({
        method: 'post',
        url: 'http://restapi.adequateshop.com/api/authaccount/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    });
    return res.data;

}