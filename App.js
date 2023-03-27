const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //returns an object

root.render(heading);