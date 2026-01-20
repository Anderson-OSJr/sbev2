import About from "./components/About";
import MainNav from "./components/MainNav";
import History from "./components/History";
import Footer1 from "./components/Footer1";
import News from "./components/News";
import Calendar from "./components/Calendar";
import Membership from "./components/Membership";
import Links from "./components/Links";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <About />
        <History />
        <News />
        <Calendar />
        <Membership />
        <Links />
      </main>
      <footer>
        <Footer1 />
      </footer>
    </>
  );
}
