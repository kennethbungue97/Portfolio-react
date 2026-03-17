import {Navbar} from '@/layout/Navbar.jsx';
import {Hero} from '@/sections/Hero.jsx';
import {About} from '@/sections/About.jsx';
import {Projects} from '@/sections/Projects.jsx';
import {Experience} from '@/sections/Experience.jsx'
import {Contact} from '@/sections/Contact.jsx';
import { CursorStars } from "./components/CursorStars";
import { Footer } from "./layout/Footer";

function App() {
  
  return (
    
    
   <div className="min-h-screen overflow-x-hidden">

    <CursorStars />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
   </div>
  )
}

export default App
