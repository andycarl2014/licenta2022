import React from 'react';

const Home = () => {
  const email = localStorage.getItem('email');
  return (
    <div className='mijloc'>
      <div>
        <h1>
          "Sănătatea e ca banii, niciodată nu vom avea o adevărată idee de
          valoarea sa până când o vom pierde." <br />
        </h1>
        <br />
        <h2>Constantin Dragos-Gabriel</h2>
        <h4>PhD in Epidemiology and Biomedical Data Science</h4>

        <br />
        {email && <h4>{email}</h4>}
      </div>
    </div>
  );
};

export default Home;
