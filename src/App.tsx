import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <section>
      <Header />
      <main className="p-4">
        <AppRoutes />
      </main>
      <Footer />
    </section>
  );
}

export default App;
