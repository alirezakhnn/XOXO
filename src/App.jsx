
import { Navbar, Header, Source, Intro, GetStarted, Brand, Lists, ContactUs, Footer } from './layouts';

const App = () => {
    return (
        <div id="app">
            <Navbar />
            <Header />
            <Source />
            <Intro />
            <GetStarted />
            <Brand />
            <Lists />
            <ContactUs />
            <Footer />
        </div>
    );
}
export default App