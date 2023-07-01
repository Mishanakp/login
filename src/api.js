import axios from "axios";

const ActionHandle = (payload) => {
  return new Promise((resolve, reject) => {
    payload.baseURL = "https://restcountries.com/v2";
    axios(payload)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response);
        } else console.log("fail", response);
        reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  FlagListURL: "/all?fields=name,region,flag",

  ActionHandle,
};
