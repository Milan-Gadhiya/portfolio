import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import AppScreen from "./screens/AppScreen";
import WebsiteScreen from "./screens/WebsiteScreen";
import { useDispatch } from "react-redux";
import { initialData } from "./Redux/actions/initialDataAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/app" element={<AppScreen />} />
            <Route path="/website" element={<WebsiteScreen />} />
            {/* <Route path="/apps/:id" element={<APPDetailsScreen />} />
            <Route path="/website/:id" element={<WebsiteDetail />} /> */}
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
