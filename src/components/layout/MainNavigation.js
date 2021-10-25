// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import classes from './MainNavigation.module.css';




function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link id="logo" to='/' className={classes.logo}>
        Lien Zhu</Link>
      <nav>
        <ul>
        
          <li>
            <HashLink to = '/#projects' className={classes.underline}>Projects</HashLink>
          </li>
          <li>
            <Link to='/about' className={classes.underline}>About</Link>
          
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
