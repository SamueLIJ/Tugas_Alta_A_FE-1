import FormInput from './components/formInput';
import List from './components/list';
import Footer from './components/footer';
import {DataProvider} from './components/dataProvider';
import Home from './pages/home';
import React from 'react';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
        <h3>+++++++++++++++++++++++++++++++</h3>
        <Home/>
      </div>
    </DataProvider>
  );
}

export default App;
