import React from 'react';
import './App.css';
import Gentleman from './components/Gentleman'
import gentlemen from './gentlemen'

function App() {

  const gentlemenComponents = gentlemen.map(gentleman=><Gentleman key={gentleman.id} magic= {gentleman}/>)


  return (
    <div className="App">
      <header>
        <h1>Power Rankings</h1>
      </header>
      <main>
        {gentlemenComponents}

      </main>
    </div>
  );
}

export default App;
