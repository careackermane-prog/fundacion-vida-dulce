import AppRouter from "./routes/AppRouter";
import ScrollProgress from "./components/ui/ScrollProgress";
import PageLoader from "./components/ui/PageLoader";

function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <AppRouter />
    </>
  );
}

export default App;