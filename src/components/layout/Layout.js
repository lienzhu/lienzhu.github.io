import ScrollArrow from '../ui/TopScrollButton';
import Footer from './Footer';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout (props){
    return (
    <div className={classes.layout}>
        <MainNavigation/>
        <main className={classes.main}>
            {props.children}

            
        </main>
        <div style={{display: "flex" }}>
                <ScrollArrow/>
            </div>
        
        <Footer/>
        
    </div>
    );
}

export default Layout;