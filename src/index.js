const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Configuración del servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));

//Conexión a la BD
const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'Hogwarts',
  });
  await connection.connect();
  return connection;
};

//Generador de token
const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });
  return token;
};

//Verificar token
const verifyToken = (token) => {
  try {
    const verifyT = jwt.verify(token, 'secret_key');
    return verifyT;
  } catch (error) {
    return null;
  }
};

//Autenticación
const authenticate = (req, res, next) => {
  const tokenBearer = req.headers['authorization'];
  if (!tokenBearer) {
    return res.status(401).json({ error: 'No se encuentra el token' });
  }
  const token = tokenBearer.split(' ')[1];
  const validateToken = verifyToken(token);
  if (!validateToken) {
    return res.status(401).json({ error: 'Token incorrecto' });
  }
  req.user = validateToken;
  next();
};

//Validación correo
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

//Iniciar el servidor
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`http://localhost:${serverPort}`);
});

// Login
server.post('/', async (req, resp) => {
  const { email, password } = req.body;
  console.log(req.body);
  const connect = await getConnection();
  const selectUser = 'SELECT * FROM users WHERE email = ?';
  const [resultSelect] = await connect.query(selectUser, [email]);
  console.log(resultSelect);
  if (resultSelect.length !== 0) {
    const isOkPass = await bcrypt.compare(
      password,
      resultSelect[0].hashed_password
    );

    if (isOkPass) {
      const infoToken = {
        id: resultSelect[0].idUser,
        email: resultSelect[0].email,
      };
      console.log(infoToken);
      const token = generateToken(infoToken);
      resp.json({ success: true, token: token });
    } else {
      resp.json({
        success: false,
        msg: 'Contraseña incorrecta. ¿Te habrán hecho algún conjuro confundus?',
      });
    }
  } else {
    resp.json({
      success: false,
      msg: 'Por favor, comprueba el correo electrónico.',
    });
  }
  connect.end();
});

//Registro
server.post('/register', async (req, resp) => {
  const { name, wizardName, birthdate, house, image, email, password } =
    req.body;
  console.log(req.body);
  const connect = await getConnection();
  const selectUser = 'SELECT * FROM users WHERE email = ?';
  const [resultSelect] = await connect.query(selectUser, [email]);
  if (!validateEmail(email)) {
    return resp.json({
      success: false,
      msg: 'El correo electrónico no es válido',
    });
  }
  if (resultSelect.length === 0) {
    const passwordHashed = await bcrypt.hash(password, 10);
    const insertUser =
      'INSERT INTO users (email, hashed_password) VALUES (?, ?)';
    const [resultUser] = await connect.query(insertUser, [
      email,
      passwordHashed,
    ]);
    const userId = resultUser.insertId;
    const insertWizard =
      'INSERT INTO wizards (name, wizardName, birthdate, house, image, fk_idUser) VALUES (?, ?, ?, ?, ?, ?)';
    const [resultWizard] = await connect.query(insertWizard, [
      name,
      wizardName,
      birthdate,
      house,
      image,
      userId,
    ]);
    resp.json({ success: true, data: resultUser });
  } else {
    resp.json({
      success: false,
      msg: 'Ese correo electrónico ya está registrado.',
    });
  }
});

//Perfil usuario
server.get('/profile', authenticate, async (req, res) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const connect = await getConnection();
  const [results] = await connect.query(sql, [req.user.email]);
  connect.end();
  res.json({
    success: true,
    user: results,
  });
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));
