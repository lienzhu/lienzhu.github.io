import {useState} from 'react';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


import classes from './TopScrollButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 200){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  
    return (
          <FontAwesomeIcon icon={faAngleDoubleUp} className={classes.scrollTop} onClick={scrollTop} 
          fixedWidth size='2x'
          style={{display: showScroll ? 'flex' : 'none'}}/>
    );
  }
  
  export default ScrollArrow;