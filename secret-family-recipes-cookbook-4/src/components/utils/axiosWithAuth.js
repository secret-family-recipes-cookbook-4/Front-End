import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://secret-recipes-2.herokuapp.com"
    });
};

export default axiosWithAuth;