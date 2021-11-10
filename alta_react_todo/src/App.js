import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Todo from "./pages/todo-redux"
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AboutApp from "./pages/aboutApp"
import AboutAuthor from "./pages/aboutAuthor"
import FormRegistrasi from "./pages/form"
import Sidebar from "./components/sideBar/sideBar"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store,persistore} from "./store/store"
import Notfound from './pages/notFound';
function App() {
  return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Sidebar/>}>
                <Route index element={<Todo/>}/>
                <Route path="form-registrasi" element={<FormRegistrasi/>} />
                <Route path="about-app" element={<AboutApp/>} />
                <Route path="about-author" element={<AboutAuthor/>} />
                <Route path="*" element={<Notfound/>} />
              </Route>

            </Routes>
          </BrowserRouter>
       </PersistGate>
     </Provider>
  );
}

export default App;
