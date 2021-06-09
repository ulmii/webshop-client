export const authenticate = async (
  email: String,
  password: String
): Promise<string | null | void> => {
  return await fetch('http://localhost:9000/auth/signIn', {
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
