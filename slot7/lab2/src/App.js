import AppNavbar from "./interface/AppNavbar";
import AppBanner from "./interface/AppBanner";
import AppMenu from "./interface/AppMenu";
import AppBooking from "./interface/AppBooking";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <AppNavbar />
      <AppBanner />
      <AppMenu />
      <AppBooking />
      <div style={{ height: "80px" }}></div>
    </div>
  );
}


export default App;
