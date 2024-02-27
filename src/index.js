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

//Iniciar el servidor
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`http://localhost:${serverPort}`);
});

//Registro
server.post('/register', async (req, resp) => {
  const { username, email, password } = req.body;
  const connect = await getConnection();
  const selectUser = 'SELECT * FROM users WHERE email = ? OR userName= ?';
  const [resultSelect] = await connect.query(selectUser, [email, username]);
  if (resultSelect.length === 0) {
    const passwordHashed = await bcrypt.hash(password, 10);
    const insertUser =
      'INSERT INTO users (userName, email, password) VALUES (?, ?, ?)';
    const [resultInsert] = await connect.query(insertUser, [
      username,
      email,
      passwordHashed,
    ]);
    resp.json({ success: true, data: resultInsert });
  }
  connect.end();
});

// Login
server.post('/', async (req, resp) => {
  const { email, pass } = req.body;
  console.log(req.body);
  const connect = await getConnection();
  const selectUser = 'SELECT * FROM users WHERE email = ?';
  const [resultSelect] = await connect.query(selectUser, [email]);
  console.log(resultSelect);
  if (resultSelect.length !== 0) {
    const isOkPass = await bcrypt.compare(pass, resultSelect[0].password);
    if (isOkPass) {
      const infoToken = {
        id: resultSelect[0].idUser,
        username: resultSelect[0].userName,
      };
      const token = generateToken(infoToken);
      resp.json({ success: true, token: token });
    } else {
      resp.json({
        success: false,
        msg: 'Contraseña incorrecta. ¿Te habrán hecho algún conjuro obliviate?',
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
