"use strict";

var app = {
    title: 'Indecision App',
    subtitle: "Put your life in the hands of a computer"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "item one"
        ),
        React.createElement(
            "li",
            null,
            "item two"
        )
    )
);

var user = {
    name: "Dustin",
    age: 21,
    location: "Los Angeles"
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
