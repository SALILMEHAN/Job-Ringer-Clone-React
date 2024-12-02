import Home from './components/Home';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll">
      <button
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-5 right-5 p-4 bg-green-500 rounded-full shadow-2xl shadow-black z-20 hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-10 h-10 text-white" />
      </button>
      <Home className="z-0" />
    </div>
  );
}

export default App;
