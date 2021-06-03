export const errorPage = () => {
  const divError = document.createElement('div');
  const viewError = `
      <img src="./imagen/error-button.jpg">
      `;

  divError.innerHTML = viewError;

  return divError;
};
