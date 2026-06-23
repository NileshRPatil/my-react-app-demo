import axios from "axios";
import { useEffect, useState } from "react";
import "../card.css";
import Pagination from "../common/Pagination";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { List } from "react-window";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    let limit = 15;
    let skip = (currentPage - 1) * limit;
    let url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
    setLoading(true);
    if (debounceSearch != "") {
      url = `https://dummyjson.com/users/search?q=${debounceSearch}`;
    }
    axios
      .get(url)
      .then((response) => {
        setUsers(prev => [...prev, ...response.data.users]);
        let pageCount = parseInt(response.data.total / response.data.limit);
        setPages(pageCount);
        setLoading(false);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [currentPage, debounceSearch]);

  const onPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const deleteHandler = (user_id) => {
    setLoading(true);
    const newUsers = users.filter((user) => user.id != user_id);
    setUsers(newUsers);
    setLoading(false);
  };

  function Row({ index, style, users, deleteHandler }) {
    const user = users[index];

    return (
      <div style={style}>
        <UserCard user={user} deleteHandler={deleteHandler} />
      </div>
    );
  }

  const handleRowsRendered = (info) => {
     const { startIndex, stopIndex } = info;
    if (stopIndex >= users.length - 10 && !loading) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      console.log("Next Page",nextPage);
    }
  };

  return (
    <>
      {loading && <p className="loader">Loading</p>}
      <div className="">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="card-container">
        <List
          rowComponent={Row}
          rowCount={users.length}
          rowHeight={220}
          rowProps={{ users, deleteHandler }}
          style={{ height: "600px", width: "100%" }}
          onRowsRendered={handleRowsRendered}
        />
        {/* {users &&
          users.map((user) => {
            return (
              <>
                <UserCard user={user} deleteHandler={deleteHandler} />
              </>
            );
          })} */}
        {/* <Pagination
          currentPage={currentPage}
          totalPages={pages}
          onPageChange={onPageChange}
        /> */}
      </div>
    </>
  );
}
