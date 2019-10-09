import './App.css';

import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';

const React = require('react');
const request = require('request');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.storeSearchField = this.storeSearchField.bind(this);
  }

  componentWillMount() {
    request.get('https://jsonplaceholder.typicode.com/users', (err, res, body) => {
      let users = JSON.parse(body);
      this.setState({monsters: users});
    });
  }

  storeSearchField(e) {
    this.setState({searchField: e.target.value.toLowerCase()});
  }

  filterMonstersBySearchField() {
    const {monsters, searchField} = this.state;
    return monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField)
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' onChange={this.storeSearchField}/>
        <CardList monsters={this.filterMonstersBySearchField()} />
      </div>
    );
  }
}

export default App;
