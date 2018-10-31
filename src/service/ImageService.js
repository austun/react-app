import axios from 'axios';

export const imageService = {
    fetchImage
};

let API_URL = 'http://localhost:8080/image/';

function fetchImage(imageName) {
    const url = API_URL + imageName;
    return axios.get(url)
        .then(response => {
            return response.data
        });
}