const quote = () => {
  return fetch('https://hogwarts-project-smoky.vercel.app/quote')
    .then((response) => response.json())
    .then((data) => {
      return data.result;
    });
};

const wizardsDb = () => {
  return fetch('https://hogwarts-project-smoky.vercel.app/wizards')
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
