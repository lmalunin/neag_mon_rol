import React, { ChangeEvent, useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
import { Monster } from "./types/monsterType";
import { getData } from "./utils/data.utils";


const App = () => {

    console.log('rendered');

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    const [title, setTitle] = useState('');

    useEffect(() => {
            const fetchUsers = async () => {
                const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users/');
                setMonsters(monsters);
            }

            fetchUsers();
        },
        []);

    useEffect(() => {
        const newfilteredMonsters = monsters.filter((monster: any) => {
            return monster.name.toLowerCase().includes(searchField);
        })

        setFilteredMonsters(newfilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value.toLowerCase());
    };

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
