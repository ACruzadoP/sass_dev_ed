import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Hello my dear</h1>
        <button>Hello</button>
      </header>
      <div className="contact">
        <button>Submit</button>
        <div className="info">
          <h1>Our contact info</h1>
          <p>This is our info</p> 
        </div>
      </div>
      <div className="footer">
        <button>Submit</button>
        <div className="info">
          <h1>Our contact info</h1>
          <p>This is our info</p> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;