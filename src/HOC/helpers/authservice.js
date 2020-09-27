import { toast } from 'react-toastify';
import axios from "axios";
import { Redirect } from 'react-router-dom';

const API_URL = "http://localhost:8000/api/";

class AuthService {
  API_URL = "http://localhost:8000/api/";
  IMG_URL = "http://localhost:8000/";
  async login(email, password) {
    try {
      
      return await axios
        .post(API_URL + "login", {
          email,
          password
        })
        .then(response => {
          if (response.data.code === 1) {
            toast.success("Logged in successful");
            localStorage.setItem("user", JSON.stringify(response.data.user)); 
          }else{
            toast.warning("user not found with provided credentials");
          }
  
          return response.data;
        }).catch( error => {
          toast.error("Something went wrong");
          return {'code': -1, 'msg': error}
        });

    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  logout() {
    console.log('logging out user');
    localStorage.removeItem("user");
    window.updateHeader();
    Redirect('/')
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
