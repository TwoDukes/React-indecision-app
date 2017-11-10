
const app = {
    title: 'Indecision App',
    subtitle: "Put your life in the hands of a computer"
};
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
  </div>
);

let user = {
    name: "Dustin",
    age: 21,
    location: "Los Angeles"
};
const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);