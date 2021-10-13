import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';


function App() {
  return (
    <BrowserRouter>
      
        <div className="App">
          <div>
            <Route exact path="/create" component={Create} />
            <Route exact path="/read" component={Read} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/delete" component={Delete} />
            <Route exact path="/admin" component={AdminPanel} />
            

          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
