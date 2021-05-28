
import sharansImg from './SharanLeventhal007col.jpg'
import './App.css';
import {LIST_OF_PIECES as LIST }from './data.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Duo Project
      </header>
      
      <main className='main-container'>
        <section>
          <img alt="logo" src={sharansImg}/>
          <p className="opening-summary">
            The duo project began in 2015 as part of the first Sharan Leventhal and Friends Studio Recital. Every year Sharan and her students commission and premiere new works for this event.
          </p>
          <p className="opening-summary">
            As of 2020, premieres include thirty-one violin duets, five marimba and violin duets, one trio for violin, marimba and oud, one violin, piano and picture book piece, one violin quartet, one violin quintet with bowed chimes and one work for eight violins written collaboratively by the members of the studio.
          </p>
          <p className="opening-summary">
            The recitals are informal and interactive, and often include interdisciplinary elements such as dance and visual art. The musicians are extremely grateful to all the wonderful contributing composers, most of whom are Boston Conservatory at Berklee and Berklee College of Music faculty, students and alumni.
          </p>
          <p className="opening-summary">
            The pieces are currently being recorded with the support of a grant from the Berklee College of Music
          </p>
        </section>

        <section>
          <ul className="composers-list">
            <h4>List of peices by composers:</h4>
            <li>
              <div className="piece_header">
                <p>{LIST.title}</p>
                <a href={LIST.link} target='_blank' rel="noreferrer">{LIST.composer}</a>
              </div>
              <p><span>Instrumentation:</span> {LIST.instrumentation}</p>
              <p>Premier date: {LIST.premier_date}</p>
              <p>Description: {LIST.notes}</p>
              <p>Premier performers: {LIST.premier_performers}</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        Copyright 2021 by Duo Project. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
