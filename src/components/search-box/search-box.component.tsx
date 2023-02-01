import React, { ChangeEventHandler, ChangeEvent } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = ({ placeholder, handleChange }: ISearchBoxProps) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)