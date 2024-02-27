const sendLogin = (data) => {
  return fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'Content type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

sendLogin();

const connectBack = {
  sendLogin: sendLogin,
};

export default connectBack;
