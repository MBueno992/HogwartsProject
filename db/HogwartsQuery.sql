--Tablas para registro

CREATE TABLE users(
idUser int auto_increment primary key,
email varchar(100) not null,
hashed_password varchar(1500) not null
); 

CREATE TABLE wizards (
    idalumno INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    wizardName VARCHAR(60), 
    birthdate DATE,
    gender VARCHAR(10),
    province VARCHAR(45),
    image LONGTEXT,
    house VARCHAR(15),
    fk_idUser INT,
    FOREIGN KEY (fk_idUser) REFERENCES users(idUser)
);

-- Citas de personajes

CREATE TABLE Quotes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cita TEXT NOT NULL,
    autor VARCHAR(50) NOT NULL
);
INSERT INTO Quotes (cita, autor) VALUES
('No son nuestras habilidades las que muestran lo que somos, sino nuestras decisiones.', 'Albus Dumbledore'),
('La felicidad se puede hallar hasta en los más oscuros momentos, si somos capaces de usar bien la luz.', 'Albus Dumbledore'),
('Para una mente bien organizada, la muerte no es más que la siguiente gran aventura.', 'Albus Dumbledore'),
('No sientas pena por los muertos, Harry, sino por los vivos, y sobre todo por aquellos que viven sin amor.', 'Albus Dumbledore'),
('La verdad es una cosa terrible y hermosa, y por lo tanto debe ser tratada con gran cuidado.', 'Albus Dumbledore'),
('La ayuda siempre se le ofrecerá en Hogwarts a aquellos que la pidan.', 'Albus Dumbledore'),
('Las palabras son, en mi no tan humilde opinión, nuestra fuente más inagotable de magia.', 'Albus Dumbledore'),
('Después de todo este tiempo? Siempre.', 'Severus Snape'),
('La mente no es un libro que uno pueda abrir a voluntad y examinar a su antojo.', 'Severus Snape'),
('La diferencia entre el bien y el mal no radica en el poder, sino en cómo lo utilizamos.', 'Severus Snape'),
('No tengas lástima de los muertos, Harry. Ten lástima de los vivos, y más que todo, de aquellos que viven sin amor.', 'Albus Dumbledore'),
('Es LeviOsa, no LeviosA.', 'Hermione Granger'),
('¡Yo soy lo que soy, y no me avergüenzo!', 'Hagrid'),
('La grandeza inspira envidia, la envidia engendra rencor, el rencor produce mentiras.', 'Voldemort'),
('El miedo a un nombre aumenta el miedo a la cosa misma.', 'Albus Dumbledore'),
('La verdad. Es una cosa terrible y hermosa, y por lo tanto debe ser tratada con gran cuidado.', 'Albus Dumbledore'),
('Nunca confíes en algo que puede pensar si no ves dónde guarda su cerebro.', 'Arthur Weasley'),
('Las consecuencias de nuestros actos son siempre tan complicadas, tan diversas, que predecir el futuro es realmente muy difícil.', 'Albus Dumbledore'),
('El tiempo dirá si hemos escogido correctamente.', 'Albus Dumbledore'),
('Es nuestra elección, Harry, lo que muestra lo que realmente somos, mucho más que nuestras habilidades.', 'Albus Dumbledore'),
('La grandeza de un hombre no se mide por cómo trata a sus iguales, sino a sus inferiores.', 'Sirius Black'),
('No conozco a nadie que haya pasado por algo así sin cambiar.', 'Sirius Black'),
('Lo que más tememos es sólo una sombra de lo que en verdad es.', 'Remus Lupin'),
('El respeto se gana, no se regala.', 'Minerva McGonagall'),
('Las cosas que perdemos tienen una forma de volver a nosotros al final.', 'Luna Lovegood'),
('No hay nada como un paseo para despejar la mente.', 'Luna Lovegood'),
('La esperanza puede ser una fuerza muy poderosa. Tal vez no haya magia real en ella, pero cuando sabemos lo que más deseamos y lo mantenemos en nuestro corazón, podemos hacer que suceda.', 'Hermione Granger'),
('Las cosas que amamos siempre se nos escaparán.', 'Severus Snape'),
('Todos tenemos luz y oscuridad en nuestro interior. Lo que importa es qué parte decidimos potenciar.', 'Sirius Black'),
('Es cruel que finalmente comprendamos que nuestras vidas están destinadas a cambiar para siempre.', 'Harry Potter'),
('El coraje no es la ausencia del miedo, sino más bien el juicio de que hay algo más importante que el miedo.', 'Hermione Granger'),
('La muerte no es el final, sino el comienzo de la próxima gran aventura.', 'Albus Dumbledore'),
('No hay ni bien ni mal, solo hay poder y aquellos demasiado débiles para buscarlo.', 'Quirinus Quirrell'),
('La vida no es justa, tu enemigo no esperará que te prepares.', 'Alastor Moody'),
('La esperanza es lo único más fuerte que el miedo.', 'Albus Dumbledore'),
('No sirve de nada preocuparse. Lo que viene vendrá y lo enfrentaremos cuando llegue.', 'Rubeus Hagrid'),
('Las cicatrices pueden ser útiles. Yo tengo una encima de la rodilla izquierda que es un plano perfecto del metro de Londres.', 'Albus Dumbledore'),
('La paciencia es una virtud.', 'Hermione Granger'),
('La vida de cada hombre acaba igual. Sólo los detalles de cómo vivió y cómo murió son lo que distingue a uno de otro.', 'Albus Dumbledore'),
('Los hombres mueren, las personas desaparecen, pero las ideas permanecen.', 'Severus Snape'),
('No es bueno dejarse arrastrar por los sueños y olvidarse de vivir.', 'Albus Dumbledore'),
('No existen malos alumnos, sólo malos profesores.', 'Minerva McGonagall'),
('El odio es un veneno que uno toma esperando que muera el otro.', 'Severus Snape'),
('El mundo no se divide en gente buena y mortífagos.', 'Sirius Black'),
('El hombre elige, el esclavo obedece.', 'Albus Dumbledore'),
('Nadie elige lo que pasa, sólo cómo reaccionar a ello.', 'Harry Potter'),
('La lealtad siempre será recompensada.', 'Albus Dumbledore'),
('El conocimiento es poder.', 'Hermione Granger'),
('La amistad y la valentía no son mutuamente excluyentes.', 'Hermione Granger'),
('El amor es la fuerza más poderosa del universo.', 'Albus Dumbledore'),
('La magia está en los ojos del que mira.', 'Luna Lovegood'),
('El tiempo y la marea no esperan a nadie.', 'Minerva McGonagall'),
('Nunca subestimes el poder del amor.', 'Severus Snape'),
('Hay cosas peores que la muerte, como vivir sin amor.', 'Albus Dumbledore'),
('El poder de la amistad siempre vencerá al mal.', 'Harry Potter'),
("Las cosas que perdemos tienen una forma de volver a nosotros al final, aunque no siempre de la forma que esperamos.", "Luna Lovegood"), 
("No te preocupes, eres tan cuerdo como yo.", "Luna Lovegood"), 
("No, no estás loco. Yo lo veo también. Eres tan cuerdo como yo.", "Luna Lovegood"), 
("El mundo está lleno de cosas increíbles esperando a ser descubiertas.", "luna Lovegood");

-- Palabras Ahorcado
CREATE TABLE words(
id INT PRIMARY KEY AUTO_INCREMENT,
palabra VARCHAR(65)
);

INSERT INTO words(palabra) VALUES 
('accio'), ('animago'), ('aguamenti'), ('amortentia'), ('aragog'), ('auror'), ('azkaban'),  
('banshee'), ('basilisco'), ('bateador'),  ('boggart'), ('bludger'), ('bezoar'),('caldero'), 
('cruciatus'), ('dementor'), ('demiguise'), ('desiluminador'), ('desmaius'), ('diffindo'), 
('engordio'), ('expelliarmus'), ('felix felicis'), ('finite incantatem'), ('goblins'), ('gringotts'), 
('grindylow'), ('hipogrifo'), ('horrocrux'), ('imperius'), ('inmobilus'), ('incendio'), 
('lumos maxima'), ('wingardium leviosa'), ('mandragora'), ('manticora'), ('ministerio de magia'), 
('mortifago'), ('minerva mcgonagall'), ('gryffindor'), ('hufflepuff'), ('ravenclaw'), ('slytherin'), 
('piedra filosofal'), ('camara de los secretos'), ('pocion'), ('varita'), ('honeydukes'), 
('la madriguera'), ('el caldero chorreante'), ('las tres escobas'), ('beauxbatons'), ('el quisquilloso'), 
('durmstrang'), ('hogwarts express'), ('polvos flu'), ('reliquias de la muerte'), ('varita de sauco'), 
('capa de invisibilidad'), ('torneo de los tres magos'), ('callejon diagon'), ('mapa del merodeador'), 
('saeta de fuego'), ('rubeus hagrid'), ('obliviate'), ('petrificus totalus'), ('prior incantato'), 
('protego totalum'), ('quaffle'), ('quidditch'), ('reducio'), ('rictunsempra'), ('repello muggleton'), 
('snitch'), ('sombrero seleccionador'), ('tarantallegra'), ('trol'), ('veritaserum'), ('albus dumbledore'), 
('severus snape'), ('harry potter'),('señor tenebroso'), ('dobby'), ('elfo libre'), ('luna lovegood'), 
('draco malfoy'), ('hermione granger'), ('remus lupin'), ('sirius black'), ('sibyl trelawney'), 
('neville longbottom'), ('madame rosmerta'), ('ojoloco moody'), ('fleur delacour'), ('viktor krum'), 
('rita skeeter'), ('diario el profeta'), ('bellatrix lestrange'), ('narcisa malfoy'), ('dolores umbridge'), 
('nymphadora tonks'), ('argus filch'), ('kingsley shacklebolt'), ('xenophilius lovegood'), ('fred weasley'), 
('george weasley'), ('olivander'), ('pomona sprout'), ('herbologia'), ('aberforth dumbledore'), ('fenix'), 
('hedwig'), ('molly weasley'), ('arthur weasley'), ('ron weasley'); 


