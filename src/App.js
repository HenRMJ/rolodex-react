import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setPeople(users));
  }, []);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    setSearchField(searchValue);
  }

  const filteredPeople = people.filter(person => person.name.toLocaleLowerCase().includes(searchField));

  return (
    <div className="App">
      <h1 className='app-title'>Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search someone" className="people-search-box"/>
      <CardList people={ filteredPeople }/>
    </div>
  )
}

export default App;
