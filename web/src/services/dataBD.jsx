const quote = () => {
  return fetch('http://localhost:4000/quote')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const wizardsDb = () => {
  return fetch('http://localhost:4000/wizards')
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
