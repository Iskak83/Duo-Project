import sharansImg from './SharanLeventhal007col.jpg'
import './App.css';
import {LIST_OF_PIECES as LIST, SUMMARY }from './data.js'



function App() {
  LIST.sort(function(a, b){
    let aa = a.premier_date.split('/').reverse().join();
    let bb = b.premier_date.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
});

  return (
    <div className="App">
      <header className="App-header">
        Duo Project
      </header>     
      <main className='main-container'>
        <section>
          <img alt="logo" src={sharansImg}/>
          {
            SUMMARY.map(summary => {
              return (
                <p key={summary.id} className="opening-summary">{summary.part}</p>
              )
            })
          }
        </section>
        <section>
          <ul className="composers-list">
          <h4>List of peices by composers:</h4>
            {LIST.map(piece => {
                return (
                        <li key={piece.id}>
                          <div className="piece_header">
                            <p className="piece-title">{piece.title}</p>
                            {piece.link.length ? <a href={piece.link} target='_blank' rel="noreferrer">{piece.composer}</a> : <p className="piece_composer">{piece.composer}</p>}
                          </div>
                          <p><span>Instrumentation:</span> {piece.instrumentation}</p>
                          <p><span>Premier date</span>: {piece.premier_date}</p>
                          <p><span>Description</span>: {piece.notes}</p>
                          <p><span>Premier performers</span>: {piece.premier_performers}</p>
                        </li>
                )
              })
            }
          </ul>
        </section>
      </main>
      <footer>
        <div>
          <p>Contact: <a href="mailto: dilfitz14@gmail.com">Dillon Robb</a></p>
          <p>Copyright 2021 by Duo Project. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
