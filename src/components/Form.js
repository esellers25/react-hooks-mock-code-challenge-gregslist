import {useState} from "react"; 

function Form({onNewItem}){
    
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    
    const newItemData = {
        image: image,
        description: description,
        location: location
    }

    function handleNewSubmit(e){
        e.preventDefault();
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItemData)
        })
        .then(r => r.json())
        .then(newItem => onNewItem(newItem))
    }

    return(
        <div>
            <h2>List an item!</h2>
                <form id="new-item-form" onSubmit={handleNewSubmit}>
                    <label>Description</label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"></input>
                    <label>Image</label>
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL"></input>
                    <label>Location</label>
                    <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location"></input>
                    <button type="submit">List It</button>
                </form>
        </div>
    )
}

export default Form;