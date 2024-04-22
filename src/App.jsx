import Page from "./Page/Page";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
  );
}

export default App;
