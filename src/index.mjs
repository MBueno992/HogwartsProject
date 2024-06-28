import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

//Configuración del servidor
const server = express();
const port = process.env.PORT || 3000;
server.use(express.json({ limit: '25mb' }));
server.use(cors());

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

// Login
server.post('/', async (req, res) => {
  const { email, password } = req.body;
  const selectUser = 'SELECT * FROM users WHERE email = ?';
  try {
    const [resultSelect] = await turso.execute(selectUser, [email]);
    if (resultSelect.rows.length !== 0) {
      const isOkPass = await bcrypt.compare(
        password,
        resultSelect[0].hashed_password
      );
      if (isOkPass) {
        const id = resultSelect[0].idUser;
        const selectWizard =
          'SELECT wizardName FROM wizards WHERE fk_idUser = ?';
        const [resultWizard] = await connect.query(selectWizard, [id]);
        const wizardName = resultWizard[0].wizardName;
        const infoToken = {
          id: resultSelect[0].idUser,
          email: resultSelect[0].email,
          wizardName: wizardName,
        };
        const token = generateToken(infoToken);
        res.json({
          success: true,
          token: token,
          userId: infoToken.id,
          wizardName: infoToken.wizardName,
        });
      } else {
        res.json({
          success: false,
          msg: 'Contraseña incorrecta. ¿Te habrán hecho algún conjuro confundus?',
        });
      }
    } else {
      res.json({
        success: false,
        msg: 'Por favor, comprueba el correo electrónico. ',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      result: 'Se ha producido un error al actualizar los datos.',
    });
  }
});

//Registro
server.post('/register', async (req, res) => {
  const { gender, name, wizardName, birthdate, email, password } = req.body;
  try {
    const selectUser = 'SELECT * FROM users WHERE email = ?';
    const resultSelect = await turso.execute(selectUser, [email]);
    if (!validateEmail(email)) {
      return res.json({
        success: false,
        msg: 'El correo electrónico no es válido',
      });
    }
    if (resultSelect.rows.length === 0) {
      const passwordHashed = await bcrypt.hash(password, 10);
      const insertUser =
        'INSERT INTO users (email, hashed_password) VALUES (?, ?)';
      const resultUser = await turso.execute(insertUser, [
        email,
        passwordHashed,
      ]);
      const userId = resultUser.insertId;
      const insertWizard =
        'INSERT INTO wizards (gender, name, wizardName, birthdate, fk_idUser) VALUES (?, ?, ?, ?, ?)';
      const resultWizard = await turso.execute(insertWizard, [
        gender,
        name,
        wizardName,
        birthdate,
        userId,
      ]);
      res.json({ success: true, data: resultUser });
    } else {
      res.json({
        success: false,
        msg: 'Ese correo electrónico ya está registrado.',
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

// //Modificar datos
server.patch('/admin/wizard', async (req, res) => {
  try {
    const { fk_idUser, gender, name, wizardName, birthdate, province, image } =
      req.body;
    const updateData =
      'UPDATE wizards SET gender = ?, name = ?, wizardName = ?, birthdate = ?, province = ?, image = ? WHERE fk_idUser = ?';
    const resultUpdate = await turso.execute(updateData, [
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
    res.status(500).json({
      success: false,
      result: 'Error en el servidor.',
    });
  }
});

//Perfil usuario
server.get('/profile/:wizardName', authenticate, async (req, res) => {
  const wizard = req.params.wizardName;
  const sql = 'SELECT * FROM wizards WHERE wizardName = ?';
  try {
    const [results] = await turso.execute(sql, [wizard]);
    res.json({
      success: true,
      user: results[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: 'Error en el servidor.',
    });
  }
});

//Logout
server.put('/logout', (req, res) => {
  const token = req.headers['Authorization'];
  // const token = tokenHeader.split(' ')[1];
  //Al token que creaste, asígnale el valor vacío, y asignale un valor de expiracion de 1s y le asigno la función de lo que quiero hacer cuando esto expire
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
  try {
    const quoteSQL = await turso.execute('SELECT * FROM Quotes');
    res.json(quoteSQL.rows);
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

//Listado magos
server.get('/wizards', async (req, res) => {
  try {
    const wizardsSQL = await turso.execute('SELECT * FROM wizards');
    console.log(wizardsSQL);
    res.json(wizardsSQL.rows);
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

//JUEGO AHORCADO
server.get('/words', async (req, res) => {
  try {
    const wordsSQL = await turso.execute('SELECT * FROM words');
    res.json(wordsSQL.rows);
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
