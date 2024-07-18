import Header from "@components/header";
import Loader from "@components/loader";
import Nodata from "@components/nodata";
import WeatherCard from "@components/weathercard";
import { useAppSelector } from "@store/hooks";

const Home = () => {
  const data = useAppSelector((store) => store.search);
  console.log(data);


  return (
    <div className="App">
      <div className="container mx-auto">
        <Header />
        <div className="card mt-4">
          {data.loading ? (
            <Loader />
          ) : data.data.data ? (
            <WeatherCard />
          ) : (
           <Nodata/>
          )}
        </div>
      </div>
    </div>

  );
};

export default Home;
