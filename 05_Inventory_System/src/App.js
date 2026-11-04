import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard"
import { Navbar } from "./components/Navbar"
import ApiServiceGet from "./server/get"

import "./App.css"

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [main, setMain] = useState({
    products: [],
    categories: [],

  });
  const update = async () => {
    try {
      const products = await ApiServiceGet.getProducts();
      const categories = await ApiServiceGet.getAllCategories();

      setMain((prevMain) => ({
        ...prevMain,
        products: products,
        categories: categories,

      }));
    } catch (error) {
      console.log(errorMessage)
      setErrorMessage(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "حدث خطأ ما."
      );
    }
  }
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      theme
    );
    localStorage.setItem("theme", theme);
    update()
  }, [theme]);




  return (
    <div className="App" >
      <Navbar main={main} toggleTheme={toggleTheme} theme={theme} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard main={main} update={update}  setMain={setMain}/>} />
        <Route path="/:id" element={<Dashboard main={main} update={update}  setMain={setMain}/>} />
      </Routes>
    </div>
  );
}

export default App;
