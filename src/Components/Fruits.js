import React, {useState} from "react";


const Fruits = () => {
   const [favouriteFruit, setFavouriteFruit] = useState(["Apple", "Mango", "Banana"])
   const [newFruit, setNewFruit] = useState("")

   console.log(favouriteFruit)
   console.log(newFruit)


   function addToFavouriteFruit(){
      let arr = [...favouriteFruit]
       arr.push(newFruit)
        //    setFavouriteFruit([...favouriteFruit, newFruit]) // ["Apple", "Mango", "Banana", "Cherry"]
              setFavouriteFruit(arr)
   }


    return(
        <div>
            <input type="text"  placeholder="Enter new Fruit"
              onChange={e => setNewFruit(e.target.value)}
            />
            <button onClick={addToFavouriteFruit}>Add to Favourite</button>

            {/* display all fruits from favouriteFruit */}
            <p> {favouriteFruit.join("  ")} </p>
        </div>
    )
}

export default Fruits;





