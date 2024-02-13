import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://swapi.dev/api/people?search=${searchTerm}&page=${page}`
        );
        setUsers(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 users per page
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="App">
      <h1 className="main-heading">Star Wars Users</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="load">
        {loading && <div className="loader"></div>}
        {error && <p>{error}</p>}
      </div>
      <div className="user_card">
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
    
      <div className='pagination-container'>
  <button
    className='pagination-button'
    onClick={handlePrevPage}
    disabled={page === 1}
  >
    Previous Page
  </button>
  <span className='pagination-info'>
    Page {page} of {totalPages}
  </span>
  <button
    className='pagination-button'
    onClick={handleNextPage}
    disabled={page === totalPages}
  >
    Next Page
  </button>
</div>

    </div>
  );
}

export default App;
