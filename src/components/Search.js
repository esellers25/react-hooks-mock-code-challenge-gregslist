import React, {useState} from "react";

function Search({listings, onSearch}) {
  
  const [searchInput, setSearchInput] = useState("")
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(searchInput.toLowerCase()));
    onSearch(filteredListings)

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
