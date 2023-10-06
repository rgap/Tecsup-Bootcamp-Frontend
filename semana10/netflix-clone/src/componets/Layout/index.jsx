// para que eslint pida tipos de datos
// proptypes esta deprecado
/* eslint-disable react/prop-types */
import logo from "../../assets/netflix-logo.png";
import { searchInNetflix } from "../../services";

export default function Layout({
  children,
  searchText,
  setSearchText,
  setTitles,
}) {
  const handleInputSearch = (e) => setSearchText(e.target.value);
  const handleKeyUp = async (e) => {
    if (e.key == "Enter" && searchText) {
      const results = await searchInNetflix(searchText);
      // console.log(results.titles);
      setTitles(results.titles);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <img className="w-28 md:w-44 -ml-2 md:-ml-4" src={logo} alt="" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={handleInputSearch}
          onKeyUp={handleKeyUp}
          className="py-1 px-2 outline-none bg-black/30 border"
        />
      </div>
      {children}
    </>
  );
}
