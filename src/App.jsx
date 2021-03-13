import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from './Chat'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const App = () => <div><Chat /></div>;

ReactDOM.render(<App />, document.getElementById("app"));
