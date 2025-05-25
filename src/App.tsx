import { CarouselBanner } from "./components/CarouselBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const slides = [
  {
    bgImage: "https://hsin-ho.tw/wp-content/uploads/2023/08/hero-1.webp",
    titleDesktop: "聖潔牙醫診所，提供您最專業與貼心的牙科服務",
    titleMobile: "聖潔牙醫診所<br>提供您最專業與貼心的牙科服務",
  },
  {
    bgImage: "https://hsin-ho.tw/wp-content/uploads/2023/08/hero-2.webp",
    titleDesktop: "聖潔牙醫診所，提供您最專業與貼心的牙科服務",
    titleMobile: "聖潔牙醫診所<br>提供您最專業與貼心的牙科服務",
  },
  {
    bgImage: "https://hsin-ho.tw/wp-content/uploads/2023/08/hero-3.webp",
    titleDesktop: "聖潔牙醫診所，提供您最專業與貼心的牙科服務",
    titleMobile: "聖潔牙醫診所<br>提供您最專業與貼心的牙科服務",
  },
  // 可添加更多輪播項目...
];

function App() {
  return (
    <section>
      <Header />
      <CarouselBanner slides={slides} interval={3000} minHeight="80vh" />
      <main className="p-4">
        <AppRoutes />
      </main>
      <Footer />
    </section>
  );
}

export default App;
