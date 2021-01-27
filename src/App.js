/*import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;*/

import React from "react";
import PropsTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    /*
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    */
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

/*
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>the number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
*/
/*
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    color: "red",
  },
  {
    id: 2,
    name: "samgyeopsal",
    color: "brown",
  },
  {
    id: 3,
    name: "bibimbap",
    color: "red",
  },
  {
    id: 4,
    name: "kimbap",
    color: "black",
  },
];

function Food({ name, color }) {
  return (
    <h1>
      i like {name} and the color is {color}
    </h1>
  );
}

Food.propTypes = {
  name: PropsTypes.string.isRequired,
  color: PropsTypes.string.isRequired,
};
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} color={dish.color} />
      ))}
    </div>
  );
}
*/
export default App;
