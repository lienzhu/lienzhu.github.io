import classes from './ProjectList.module.css'
import ProjectItem from './ProjectItem';

function ProjectList(props){
    return(
        <div className={classes.listWrapper}>
            <ul className={classes.list}>
            {props.projects.map(project => 
            <ProjectItem key={project.id} 
            id ={project.id}
            url={project.url}
            img = {project.projectThumbnail.url}
            imgAlt = {project.projectThumbnail.alternativeText}
            title = {project.title}
            description={project.description}/>)}

            </ul>
        </div>

    );

}

export default ProjectList;