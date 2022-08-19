import Header from "./components/Header/Header";

import TestSection from "./sections/TestSection/TestSection";
import GetSection from "./sections/GetSection/GetSection";
import BG from "./components/BG/BG";
import PostSection from "./sections/PostSection/PostSection";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import {useDevice} from "./Device/DeviceContext";

function App() {
    const [device] = useDevice()

    return (
        <div className="App">
            <Header type={device} />
            <main>
                <BG variant={'background'}>
                    <TestSection/>
                    <Container type={device}>
                        <GetSection/>
                        <PostSection/>
                    </Container>
                </BG>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
