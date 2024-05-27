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
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'freedb_Hogwarts',
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

//Validación contraseña
const validatePassword = (pass) => {};

//Iniciar el servidor
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`http://localhost:${serverPort}`);
});

// Login
server.post('/', async (req, resp) => {
  const { email, password } = req.body;
  const connect = await getConnection();
  const selectUser = 'SELECT * FROM users WHERE email = ?';
  const [resultSelect] = await connect.query(selectUser, [email]);
  if (resultSelect.length !== 0) {
    const isOkPass = await bcrypt.compare(
      password,
      resultSelect[0].hashed_password
    );
    if (isOkPass) {
      const id = resultSelect[0].idUser;
      const selectWizard = 'SELECT wizardName FROM wizards WHERE fk_idUser = ?';
      const [resultWizard] = await connect.query(selectWizard, [id]);
      const wizardName = resultWizard[0].wizardName;
      const infoToken = {
        id: resultSelect[0].idUser,
        email: resultSelect[0].email,
        wizardName: wizardName,
      };
      const token = generateToken(infoToken);
      resp.json({
        success: true,
        token: token,
        userId: infoToken.id,
        wizardName: infoToken.wizardName,
      });
    } else {
      resp.json({
        success: false,
        msg: 'Contraseña incorrecta. ¿Te habrán hecho algún conjuro confundus?',
      });
    }
  } else {
    resp.json({
      success: false,
      msg: 'Por favor, comprueba el correo electrónico. ',
    });
  }
  connect.end();
});

//Registro
server.post('/register', async (req, resp) => {
  const { gender, name, wizardName, birthdate, email, password } = req.body;
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
      'INSERT INTO wizards (gender, name, wizardName, birthdate, fk_idUser) VALUES (?, ?, ?, ?, ?)';
    const [resultWizard] = await connect.query(insertWizard, [
      gender,
      name,
      wizardName,
      birthdate,
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

// //Modificar datos
server.patch('/admin/wizard', async (req, res) => {
  try {
    const { fk_idUser, gender, name, wizardName, birthdate, province, image } =
      req.body;
    const connect = await getConnection();
    const updateData =
      'UPDATE wizards SET gender = ?, name = ?, wizardName = ?, birthdate = ?, province = ?, image = ? WHERE fk_idUser = ?';
    const [resultUpdate] = await connect.query(updateData, [
      gender,
      name,
      wizardName,
      birthdate,
      province,
      image,
      fk_idUser,
    ]);
    res.json({ success: true, result: 'Datos actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos: ', error);
    res.status(500).son({
      success: false,
      result: 'Se ha producido un error al actualizar los datos.',
    });
  }
});

//Perfil usuario
server.get('/profile/:wizardName', authenticate, async (req, res) => {
  const wizard = req.params.wizardName;
  const sql = 'SELECT * FROM wizards WHERE wizardName = ?';
  const connect = await getConnection();
  const [results] = await connect.query(sql, [wizard]);
  connect.end();
  res.json({
    success: true,
    user: results[0],
  });
});

//Logout
server.put('/logout', (req, res) => {
  const token = req.headers['Authorization'];
  // const token = tokenHeader.split(' ')[1];
  //Al token que creaste, asígnale el valor vacío, y signale un valor de expiracion de 1s y le asigno la función de lo que quiero hacer cuando esto expire
  jwt.sign(token, 'secret_key', { expiresIn: '1s' }, (logoutToken, error) => {
    if (logoutToken) {
      res.json({ success: true, message: 'Token eliminado correctamente' });
    } else {
      res.json({ success: false, message: 'Ha ocurrido un error' });
    }
  });
});

//Listado citas
server.get('/quote', async (req, res) => {
  const connect = await getConnection();
  const quoteSQL = 'SELECT * FROM Quotes';
  const [resultQuote] = await connect.query(quoteSQL);
  res.json({ success: true, result: resultQuote });
});

//Listado magos
server.get('/wizards', async (req, res) => {
  const connect = await getConnection();
  const wizardsSQL = 'SELECT * FROM wizards';
  const [resultWizards] = await connect.query(wizardsSQL);
  res.json(resultWizards);
});

//JUEGO AHORCADO
server.get('/words', async (req, res) => {
  const connect = await getConnection();
  const wordsSQL = 'SELECT * FROM words';
  const [resultWords] = await connect.query(wordsSQL);
  res.json({ success: true, result: resultWords });
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));
