import { useTheme } from "../hooks/useTheme";
import {Sun, Moon} from 'lucide-react'
import '../../styles/Nav.css'
import { NAV_LINKS } from "../constants";
const Nav = () => {
const {theme, toggleTheme} = useTheme();

return(
    
    <nav>
        <p className = 'logo'><span className = 'logo-first'>nyala</span> <span className = 'logo-last'>jackson</span></p>
        <div className = 'nav-right'>
            <ul className = 'nav-links'>
               {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <Moon className = 'nav-links' size = {20}/> : <Sun size = {20} className = 'nav-links'/>}
            </button>
        </div>
    </nav>
    
);
}

export default Nav;