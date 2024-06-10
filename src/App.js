import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlantData from "./components/PlantData";
import TempAmbChart from "./components/LuzChart";
import axios from "axios";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get("https://6qotkczdj9.execute-api.us-east-1.amazonaws.com/Dev/getAll")
      .then((response) => {
        if (Array.isArray(response.data.body)) {
          setData(response.data);
          console.log("Data fetched: ", response.data.body);
        } else {
          console.error("Error: data.body is not an array", response.data.body);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000); // fetch data every 2 seconds

    return () => {
      clearInterval(intervalId); // clear interval on component unmount
    };
  }, []);

  return (
    <NextUIProvider>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <PlantData data={data ? data.body : []} />
          <div>{data && <TempAmbChart data={data} />}</div>
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;