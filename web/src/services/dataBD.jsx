const quote = () => {
  return fetch('https://hogwarts-project-back.vercel.app/quote')
    .then((response) => response.json())
    .then((data) => {
      return data.result;
    });
};

const wizardsDb = () => {
  return fetch('https://hogwarts-project-back.vercel.app/wizards')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const wordsGame = () => {
  return fetch('https://hogwarts-project-back.vercel.app/words').then(
    (response) =>
      response.json().then((data) => {
        return data.result;
      })
  );
};

const dataBd = {
  quote: quote,
  wizardsDb: wizardsDb,
  wordsGame: wordsGame,
};

export default dataBd;
