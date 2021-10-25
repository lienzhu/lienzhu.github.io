import { Link } from 'react-router-dom';

import classes from './Footer.module.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} fixedwidth size='sm' color='grey'/>
//const linkedIn = <FontAwesomeIcon icon ={faLinkedin} fixedwidth size='lg' color='grey'/> //{linkedIn}
//const email = <FontAwesomeIcon icon={faEnvelope} fixedWidth size='lg' color='grey'/>

//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

function Footer() {



  return (
    <footer className={classes.footer}>
      <div className={classes.overview}>
          Designed and coded by Lien Zhu {element}
          
          
      </div>
      
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li >
            <Link to={{pathname:'https://www.linkedin.com/in/lien-zhu/'}} target="_blank">LinkedIn</Link>
          </li>
          <span className={classes.listSpan}>
          <li>
            <a href="mailto:lienzhu07@gmail.com">Email</a>
          </li>
          </span>
          
        </ul>
        
      </nav>
      
      
    </footer>
  );
}

export default Footer;
