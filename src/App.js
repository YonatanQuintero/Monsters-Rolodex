import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <input
          type="search"
          className="search-box"
          placeholder="Search Monters"
          onChange={onSearchChange}
        />

        <span>
          {filteredMonster.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })}
        </span>

      </div>
    )
  }
}

export default App;
