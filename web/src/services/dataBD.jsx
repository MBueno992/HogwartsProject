const quote = () => {
  return fetch('http://localhost:4000/quote')
    .then((response) => response.json())
    .then((data) => {
      return data.result;
    });
};

const wizardsDb = () => {
  return fetch('https://hogwarts-project-beta.vercel.app/wizards')
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
