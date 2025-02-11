import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function NavBar() {

const {searchParam, setSearchParam, handlSubmit} = useContext(GlobalContext)
console.log(searchParam)

  return (
    <nav className="flex justify-between item-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300">
            Food Recipe
          </NavLink>
        </li>
      </h2>
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
          placeholder="Enter Item.."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex-gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
            >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
            >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
