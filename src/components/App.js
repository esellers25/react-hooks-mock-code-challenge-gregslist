import React, { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])
  
  function handleDeleteListing(id){
    const newListingsArray = listings.filter(listing => listing.id !== id);
    setListings(newListingsArray)
  }
  
  function handleSearch(filteredListings){
    setListings(filteredListings)
  }

  function handleSort(sortedListings){
    setListings(sortedListings)
  }

  function handleNewItem(newItem){
    const updatedListings = [...listings, newItem]
    setListings(updatedListings)
  }
  
  return (
    <div className="app">
      <Header listings={listings} onSearch={handleSearch}/>
      <Form onNewItem={handleNewItem}/>
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing} onSort={handleSort}/>
    </div>
  );
}

export default App;
