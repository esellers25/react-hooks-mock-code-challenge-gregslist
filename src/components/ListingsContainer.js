import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing, onSort}) {
  
  function handleSort(){
      const sortedListings = listings.sort(function(a,b){
        return a.location.localeCompare(b.location);
      })
      onSort(sortedListings)
  }

  const allListings = listings.map((listing) => {
    return(
      <ListingCard 
      key={listing.id}
      listing={listing}
      onDeleteListing={onDeleteListing}
      />
    )
  })

  
  return (
    <main>
      <button onClick={handleSort}>Sort by Location</button>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
