import {IProfile} from '../interface';

export const register = async (
  email: String,
  password: String
): Promise<IProfile> => {
  return await fetch(process.env.REACT_APP_APIHOST + '/auth/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{
    "email": "${email}",
    "password": "${password}"
}`,
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(response => response.json())
    .catch(e => console.error('api' + e));
};

export default register;
