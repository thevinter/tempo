import axios from "axios";
import { instanceOf } from 'prop-types';
import Cookies from 'js-cookie';


class ApiService {
    baseURL = "http://localhost:3003"

    static instance = axios.create({
        headers: {
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      })
      

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    async get(url, params){
        const response = await ApiService.instance.get(this.baseURL + url, {headers : { token: Cookies.get("token")}});
        return response.data;  
    }

    async post(url, body){
        return await ApiService.instance.post(this.baseURL + url, body).then(
            (function(response) {
                return response.data;
            })
        ).catch(
            (function (error) {
                if(error.response) {
                    return error.response
                }
            })
        )
    }

    static getIndex(){
        return new this().get("/");
    }

    static async login(user, password){
        let data = await new this().post("/user/login", {username: user, password: password});
        if(data.token) {
            Cookies.set('token', data.token, {path: '/'});
            ApiService.instance.defaults.headers['token'] = data.token
        }
        return data;
    }

    static async getCurrentUser() {
        let data = await new this().get("/user/me")
        return data
    }

    static async getMessages() {
        let data = await new this().get("/messages/all")
        return data
    }
}

export default ApiService;