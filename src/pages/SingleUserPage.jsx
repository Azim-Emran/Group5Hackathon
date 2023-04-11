import React, { useContext } from 'react';
import { FreeLancerContext } from './components/FreeLancerContext';

function SingleUserPage() {
  const data = useContext(FreeLancerContext);

  return (
    <>
    <div className='wrapper'>
    <div>
      <h1>Other Page Component</h1>
      <p>Name: {data.use_name}</p>
    </div>
    </div>
    </>
  );
}

export default SingleUserPage;
