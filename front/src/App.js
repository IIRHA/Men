import {BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home'

//components
import Nav from './components/nav'

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Nav/>
              <div className="pages">
                  <Routes>
                      <Route
                          path="/"
                          element={<Home/>}
                      />
                  </Routes>
              </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
