import React from "react";
import { useState } from "react";
import { filterItems, foods } from "./data.js";

export default function FilterableList() {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);
  
    function handleChange(e) {
      setQuery(e.target.value);
    }
  
    return (
      <>
        <SearchBar
          query={query}
          onChange={handleChange}
        />
        <hr />
        <List items={results} />
      </>
    );
}

function SearchBar({ query, onChange }) {
    return (
        <>
            <label>Search:{' '}</label>
            <input 
                value={query}
                onChange={onChange} 
                />
        </>
    )    
}


function List({ items }) {
    return (
      <table>
        <tbody> 
          {items.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}


export { SearchBar, FilterableList };