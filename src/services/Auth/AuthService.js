import axios from "axios";
// import { getError } from "../../utils/errors/GetError";

const API_URL = "http://192.168.1.250:8000/api/";


class AuthService {
    login(userName, pass, setToken, setIsError, 
      setIsLoadingAuth, 
      // setMsg,  setCodeError
      ) {
      // setIsLoadingAuth(true)
        let data = JSON.stringify({
            "username": userName,
            "password": pass
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + 'login_check',
            headers: { 
              'Content-Type': 'application/json',
            },
            data : data
          };

          axios.request(config)
          .then((response) => {
            setToken(response.data.token)
            // localStorage.setItem("user", response.data.token);
            setIsLoadingAuth(false)
            setIsError(false)
          })
          .catch((error) => {
            console.log(error);
            // setMsg(getError(error))
            // setCodeError(error.response.data.code)
            setIsError(true)
            setIsLoadingAuth(false)
            // setIsLoadingAuth(false)

          });
  }

  logout() {
    localStorage.removeItem("user");
    // authLogout()
  }

  register(userName, pass) {
    return axios.post(API_URL + "register", {
      userName,
      pass,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
}

export default new AuthService();