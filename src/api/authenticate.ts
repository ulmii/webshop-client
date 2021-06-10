export const authenticate = async (
  email: String,
  password: String
): Promise<string | null | void> => {
  return await fetch(process.env.REACT_APP_APIHOST + '/auth/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{
    "email": "${email}",
    "password": "${password}"
}`,
  })
    .then(response => response.headers)
    .then(data => {
      return data.get('X-Auth');
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export default authenticate;
