import CharactersWithOutQuery from "./components/CharactersWithOutQuery";
import CharactersWithQuery from "./components/CharactersWithQuery";
import "./styles.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <CharactersWithQuery />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
