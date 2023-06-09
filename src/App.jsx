import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import './App.css'
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout"
import { publicRoute } from "./routes"
function App() {


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {publicRoute.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route key={index} path={route.path} element={<Layout>  <Page /> </Layout>
                }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
