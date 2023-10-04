import axios from 'axios';
import {BASE_URI} from 'utils/constants';


/** define an axios instance config */
const config = {
  baseURL: BASE_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

/**
 * @description the interface of api response
 * @export
 * @interface APIResponse
 */
export interface APIResponse<T = any> {
  data: T;
  message: string;
  status: boolean;
}

/** create an axios client service with instance config */
const axiosClient = axios.create(config);

/** handle intercept requests or responses before they are handled */
axiosClient.interceptors.request.use(
  async (req: any) => {
    //Handle Authorization
    // const {getKeyStore} = useKey();
    // const token = await getKeyStore('token');
    // if (token) {
    //   req.headers.Authorization = `Bearer ${token}`;
    // }

    return req;
  },
  (err: any) => Promise.reject(err),
);


// let countCode401 = 0;
axiosClient.interceptors.response.use(
  (res: any) => Promise.resolve(res.data),
  async (err: any) => {
    return Promise.reject(((err || {}).response || {}).data);
  },
);

export default axiosClient;
