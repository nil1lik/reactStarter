import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import ProductDetail from "./pages/Products/ProductDetail"
import ProductAdd from "./pages/Products/ProductAdd"


// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
  return <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/products/add" Component={ProductAdd}></Route>
        <Route path="/products/:id" Component={ProductDetail}></Route>
        <Route path="*" Component={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </>

}