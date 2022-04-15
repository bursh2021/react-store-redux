import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { AboutPage } from "./Pages/AboutPage";
import { HomePage } from "./Pages/HomePage";
import { PostPage } from "./Pages/PostPage";
import { ProductPage } from "./Pages/ProductPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>{/* header outlet  footer  */}'
        {/* main */}
          <Route index element={<HomePage/>} />
          <Route path='posts' element={<ProductPage/>} />   {/* api */}
          <Route path="posts/:id" element={<PostPage />} />  {/* api */}
          <Route path='about' element={<AboutPage  />} />
           {/* main */}
        </Route>{/* header outlet footer  */}
      </Routes>
    </div>
  );
}

export default App;
