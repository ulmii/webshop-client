import {IProfile} from '../interface';

export const fetchProfile = async (auth: string): Promise<IProfile> => {
  return await fetch(process.env.REACT_APP_APIHOST + '/profile', {
    headers: {
      'X-Auth': auth,
    },
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(response => response.json());
};

export default fetchProfile;
