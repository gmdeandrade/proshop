import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import products from "./products";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen products={products}></HomeScreen>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
