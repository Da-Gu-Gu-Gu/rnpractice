import { createContext,useState } from "react";

const FavoritesContent=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})

export {
    FavoritesContent
}

function FavoirtesContextProvider({children}){

    const [favoriteMealIds,setFavoriteMealIds]=useState([])

    const addFavorite=(id)=>{
        setFavoriteMealIds((prev)=>[...prev,id])
    }

    const removeFavorite=(id)=>{
        setFavoriteMealIds((ids)=>ids.filter(x=>x!==id))
    }

    const value={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }


    return(
        <FavoritesContent.Provider value={value} >
            {children}
        </FavoritesContent.Provider>
    )
}

export default FavoirtesContextProvider