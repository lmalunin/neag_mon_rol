import React, {useEffect, useState} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

const App = () => {

    console.log('rendered');

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    const [title, setTitle] = useState('');

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

    const onTitleChange = (e) => {
        setTitle(e.target.value.toLowerCase());
    };

    return (
        <div className='App'>
            <h1> {title} </h1>
            <h1> Monsters Rolodex </h1>

            <SearchBox
                placeholder='search monsters'
                handleChange={onSearchChange}
            />
            <br/>
            <SearchBox
                placeholder='set title'
                handleChange={onTitleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
