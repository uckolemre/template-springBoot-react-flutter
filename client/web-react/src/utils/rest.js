import axios from "axios";

const REST_URL="http://localhost:8080"

function get(path){
    const headers = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    return axios.get(`${REST_URL}${path}`,headers)
}

function post(path, body={}){
    const headers = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
    return axios.post(`${REST_URL}${path}`, body,headers)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export {get, post, REST_URL}
