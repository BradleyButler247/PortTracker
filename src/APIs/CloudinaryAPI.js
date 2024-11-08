import axios from "axios";
// Require the Cloudinary library
const cloudinary = require('cloudinary').v2

const BASE_URL = process.env.CLOUDINARY_URL;

const cloudinaryConfig = {
  cloudName: 'pt-pfps',
  apiKey: '163823986761637',
  secretKey: process.env.CLOUDINARY_SECRET_KEY
}


class CloudinaryAPI {

    
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {};
        const params = (method === 'get') ? data : {};
    
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
    }

    static async savePfp (img) {

      const options = {
        overwrite: true,
        invalidate: true,
        resource_type: "auto",
      };

      // const res = await POST https://api.cloudinary.com/v1_1/demo/image/upload
    



      // try {
      //   const res = await cloudinary.uploader.upload(img, opts);
      //   console.log(res)
      //   return res
      // } catch (err) {
      //   console.log(err)
      // }
      


        // const res = cloudinary.uploader.upload(file).then( result => console.log(result) );
        // return res
    }

    // static async getTokenList(start = 1, limit = 50) {
      // const res = await this.request(`crypto/browse`, {
      //   start: start, 
      //   limit: limit
      // });
      // return res
    // }
}

export default CloudinaryAPI