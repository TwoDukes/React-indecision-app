//JSX - Javascript XML
//const template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js"
  );
const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);