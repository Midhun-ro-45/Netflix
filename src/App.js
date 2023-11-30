// import LoginForm from "./pages copy/auth/Login";
import LoginForm from "./pages copy/auth/Login";
import LandingPage from "./pages copy/public/LandingPage";
import { getFetchActionMovies } from "./api/getMovies";
import { getFetchHorrorMovies } from "./api/getMovies";

function App() {
  getFetchActionMovies()
  getFetchHorrorMovies()

  return (
    <>
      {/* <LandingPage /> */}

    </>
  );
}

export default App;
