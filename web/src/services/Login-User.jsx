const sendLogin = (data) => {
  return fetch('https://hogwartsproject.onrender.com/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

const sendRegister = (data) => {
  return fetch('https://hogwartsproject.onrender.com/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

const connectBack = {
  sendLogin: sendLogin,
  sendRegister: sendRegister,
};

export default connectBack;
