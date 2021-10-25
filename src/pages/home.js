import ProjectList from '../components/projects/ProjectList';
import classes from './home.module.css';
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import homePageIllustration from '../CoffeeIllustration.png';

function HomePage(){

const [isLoading, setIsLoading] = useState(true);
  const [loadedProject, setLoadedProject] = useState([]);

  // const api_url = "http://localhost:1337";

  //https://stackoverflow.com/questions/61727391/react-js-how-to-show-only-first-object-of-fetched-api

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:1337/projects")
      .then((response) => {
        console.log('response',response);

        return response.json();
      })
      .then((data) => {
        const projects = [];

        for (const key in data) {
          const project = {
            id: key,
            ...data[key],
          };

          projects.push(project);
        }
        console.log(projects);
        setIsLoading(false);
        setLoadedProject(projects);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return ( 
    <div className={classes.homeContainer}>
    
    <div className={classes.coverHeaderBackground}>
      
    <header className={classes.header}>
      <Link id="logo" to='/' className={classes.logo} 
      >
        Lien Zhu</Link>
      <nav>
        <ul>
        
          <li>
            {/* <Link to='/' className={classes.underline}>Projects</Link> */}
            <HashLink to = '/#projects' className={classes.underline}>Projects</HashLink>
          </li>
          <li>
            <Link to='/about' className={classes.underline}>About</Link>
          </li>
          
        </ul>
      </nav>
    </header>

      <div className={classes.coverSection}>
          <h1 className={classes.coverName}>Lien Zhu</h1>
          <div className={classes.coverLineOne}>
            Passionate about sustainability and social impact
        </div>
        <div className={classes.coverLineTwo}>
            Service {"&"} Interaction Designer @ Accenture Interactive
        </div>
        </div>
      </div>

      

      <div className={classes.introContainer}>
        <div className={classes.intro}>
            Hi there! I'm Lien. {'\n'}{'\n'}
        </div>
        
        <div className={classes.introSub}>
            {'\n'}
            I'm a product geek who likes to dream about how we can use digital solutions to transform our daily way of life into a more sustainable and conscientious future.
            {'\n'}{'\n'}
            Check out my work below!
        </div>
        
        <div>
        <img src={homePageIllustration} alt="It's me" className={classes.illustration}></img>
        </div>
        
        </div>

        <div id='projects' className={classes.projectSection}>
            <ProjectList projects= {loadedProject}/>
        </div>
        
        
        
    </div>
);
}

export default HomePage;