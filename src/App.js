import React, {Fragment, useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Provider} from 'react-redux';
import store from './store';
import Searchbar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import TechListModal from './components/techs/TechListModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store = {store}>
      <Fragment> 
        <Searchbar/>
        <div className = "container">
          <AddLogModal/>
          <EditLogModal/>
          <TechListModal/>
          <AddTechModal/>
          <AddBtn/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
