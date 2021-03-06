const domElement = document.getElementById('root');

const reactElement = React.createElement(
    'header',
    {},
    React.createElement('h1', {}, 'Hello from React Element'),
    React.createElement('h2', {}, 'The Best Framework Ever'),
    React.createElement('h3', {}, 'Ala-Bala')
);

console.log(reactElement);

ReactDOM.render(reactElement, domElement);