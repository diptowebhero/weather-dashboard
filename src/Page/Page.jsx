import { useContext } from "react";
import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";
import { WeatherContext } from "../context";
import Loading from "../ui/Loading";
export default function Page() {
  const { loading } = useContext(WeatherContext);

  return (
    <>
      {loading?.state ? (
        <Loading loading={loading} />
      ) : (
        <div className='grid place-items-center h-screen'>
          <Header />
          <main>
            <section className='container'>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
