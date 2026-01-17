import About from "./components/About";
import MainNav from "./components/MainNav";
import History from "./components/History";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <About />
        <History />
      </main>
      <footer></footer>
    </>
  );
}
