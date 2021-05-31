import axios from "axios";

//setting up API call
const URL = "https://randomuser.me/api/?results=25&nat=us,gb";

//sending out the API parameter information
const sendOut = {
  getEmployees: function () {
    return axios.get(URL);
  },
};

export default sendOut;
