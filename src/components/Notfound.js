import React from 'react';
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <>
      <div className="container text-center" style={{ position: 'absolute', left: 0, right: 0 }}>
        <h1 className="container my-5">NOT FOUND</h1>
        <h1 className="container my-3">Error 404</h1>
        <Link to="/">
          <button className="btn btn-primary  my-5 py-5" style={{ position: 'absolute', left: 0, right: 0 }}>Back to HomePage</button>
        </Link>
      </div>
    </>
  )
}

export default Notfound;