import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(() => { 
      return { searchField }
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState(() => {
      return { monsters } 
    }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Rolodex</h1>
        <SearchBox onChangeHandler={ onSearchChange } placeholder="Search Monster" className="monsters-search-box"/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
  }
  
}

export default App;
