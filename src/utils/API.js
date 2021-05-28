import React from "react";

//setting up API call
const URL = "https://randomuser.me/api/?results=25&nat=us,gb";

//sending out the API parameter information
export default {
  returnEmployees: function () {
    return React.get(URL);
  },
};
