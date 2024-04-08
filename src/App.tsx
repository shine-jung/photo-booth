import { LazyMotion, domMax } from "framer-motion";
import PhotoBooth from "./components/photo-booth";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <LazyMotion strict features={domMax}>
        <PhotoBooth />
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
