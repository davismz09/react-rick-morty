import React from "react";

export const NavMenu = ({page, setPage}) => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setPage(page > 1 ? page - 1 : 42)}>
        Prev-Page: {page >= 2 ? page - 1 : 42}
      </button>
      <p>Page: {page} </p>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setPage(page < 42 ? page + 1 : 1)}>
        Next-Page: {page < 42 ? page + 1 : 1}
      </button>
    </header>
  );
};
