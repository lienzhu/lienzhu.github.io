import classes from './ProjectItem.module.css';
import { Link } from 'react-router-dom';


function ProjectItem(props){

    const api_url = "http://localhost:1337";
    const page_url = (props.url);
    console.log(props.url);
    

    return(
        <div className={classes.itemContainer}>

        <Link to={`${page_url}`} className={classes.link}>
        <li className={classes.itemList}>
            
            <img className={classes.image}
                src={api_url+ props.img} 
                alt={api_url+ props.imgAlt}></img>
            <div className={classes.projectTitle}>{props.title}</div>

            <p>{props.description}</p>
            

        </li>
        </Link>
        </div>
    );
}

export default ProjectItem;