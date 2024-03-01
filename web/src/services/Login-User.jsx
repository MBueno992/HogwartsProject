let tokenOk = '';

const sendLogin = (data) => {
  return fetch('https://hogwartsproject.onrender.com/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success && result.token) {
        tokenOk = result.token;
      }
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

const sendProfile = (userId, data) => {
  return fetch('http//localhost:4000/profile', {
    method: 'POST',
    body: JSON.stringify(userId),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => console.log('perfil ok', data));
};

const getProfile = (wizard) => {
  return fetch(`https://hogwartsproject.onrender.com/profile/${wizard}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenOk}`, // Incluye el token de autorización en el encabezado
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { name, wizardName, house, image, birthdate } = data.user;
      return data.user;
    });
};

const connectBack = {
  sendLogin: sendLogin,
  sendRegister: sendRegister,
  sendProfile: sendProfile,
  getProfile: getProfile,
};

export default connectBack;
