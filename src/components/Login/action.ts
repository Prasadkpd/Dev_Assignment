export const login = (username: string, password: string): string => {
    if (username === 'admin' && password === 'password') {
        return "success";
    } else {
        return "Please enter correct username & password."
    }
}