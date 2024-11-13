import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context"

export default function Details(){

const {id} = useParams()
const [recipeDetailsData, setRecipeDetailsData] = useContext(GlobalContext)


useEffect(()=>{
    async function getRecipeDetails(){
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const data = await response.json()
       
    }
},[])

    return(
        <div>Details</div>
    )
}  