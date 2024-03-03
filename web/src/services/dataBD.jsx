const quote = () => {
  return fetch('https://hogwartsproject.onrender.com/quote')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const wizardsDb = () => {
  return fetch('https://hogwartsproject.onrender.com/wizards')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const dataBd = {
  quote: quote,
  wizardsDb: wizardsDb,
};

export default dataBd;
