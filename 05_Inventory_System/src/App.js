import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard"
import { Navbar } from "./components/Navbar"
import ApiServiceGet from "./server/get"

import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [main, setMain] = useState({
    products: [],
    categories: [],

  });
const update = async () => {
    try {
        setLoading(true);
        setErrorMessage("");

        const [products, categories] = await Promise.all([
            ApiServiceGet.getProducts(),
            ApiServiceGet.getAllCategories(),
        ]);

        setMain((prevMain) => ({
            ...prevMain,
            products,
            categories,
        }));

    } catch (error) {
        console.log(error);

        setErrorMessage(
            error.response?.data?.errors?.[0]?.msg ||
            error.response?.data?.message ||
            "حدث خطأ ما."
        );

    } finally {
        setLoading(false);
    }
};
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

}, [theme]);

useEffect(() => {
    update();
}, []);




  return (
   <div className="App">

    <Navbar
        main={main}
        toggleTheme={toggleTheme}
        theme={theme}
    />

    <ToastContainer />

    {loading ? (

        <div className="d-flex justify-content-center align-items-center"
             style={{ minHeight: "80vh" }}>

            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>

        </div>

    ) : errorMessage ? (

        <div className="alert alert-danger text-center m-4">
            {errorMessage}
        </div>

    ) : (

        <Routes>
            <Route
                path="/"
                element={
                    <Dashboard
                        main={main}
                        update={update}
                        setMain={setMain}
                    />
                }
            />

            <Route
                path="/:id"
                element={
                    <Dashboard
                        main={main}
                        update={update}
                        setMain={setMain}
                    />
                }
            />
        </Routes>

    )}

</div>
  );
}

export default App;
