import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./Components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        const { info, results } = res;
        setCharactersList(results);
        setPrevious(info.prev);
        setNext(info.next);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);
  const nextPage = () => {
    if (next !== null) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (previous !== null) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="container-header">
        <button className="btn-State" onClick={previousPage}>
          Previous
        </button>
        <h1>Meus Personagens</h1>
        <button className="btn-State" onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="middle">
        <Characters charactersList={charactersList} />
      </div>
    </div>
  );
}

export default App;
