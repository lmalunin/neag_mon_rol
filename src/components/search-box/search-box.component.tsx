import React, { ChangeEventHandler } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
    placeholder: string;
    handleChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchBox = ({ placeholder, handleChange }: ISearchBoxProps) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)