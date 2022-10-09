import React, {useEffect, useState} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

const App = () => {

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
                .then(response => response.json())
                .then(monsters => setMonsters(monsters))
        },
        []);

    useEffect(() => {
        const newfilteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField);
        })

        setFilteredMonsters(newfilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e) => {
        setSearchField(e.target.value.toLowerCase());
    };

    return (
        <div className='App'>
            <h1> Monsters Rolodex </h1>
            <SearchBox
                placeholder='search monsters'
                handleChange={onSearchChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
