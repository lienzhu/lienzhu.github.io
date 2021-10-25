import { useState, useEffect } from "react";

import classes from "./about.module.css";

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProfile, setLoadedProfile] = useState([]);

  const api_url = "http://localhost:1337";

  //https://stackoverflow.com/questions/61727391/react-js-how-to-show-only-first-object-of-fetched-api

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:1337/abouts")
      .then((response) => {
        console.log('response',response);

        return response.json();
      })
      .then((data) => {
        const aboutDetails = [];

        for (const key in data) {
          const aboutDetail = {
            id: key,
            ...data[key],
          };

          aboutDetails.push(aboutDetail);
        }
        //console.log(aboutDetails);
        setIsLoading(false);
        setLoadedProfile(aboutDetails);
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

    <div className={classes.pageContainer}>
        <div>
        {loadedProfile.map((aboutDetail) => (
        <img className = {classes.image}
        key={aboutDetail.ProfilePicture.id} 
        src={api_url + aboutDetail.ProfilePicture.url} 
        alt={aboutDetail.ProfilePicture.alternativeText}
        />
        ))}
        </div>    
    <div>
      {loadedProfile.map((aboutDetail) => (
        <p className = {classes.paragraph}
        key={aboutDetail.id}
        id={aboutDetail.id}
        about = {aboutDetail.AboutMe}
        profilepicture = {aboutDetail.ProfilePicture}
        >
        {aboutDetail.AboutMe}  
        </p>
      ))}
    </div>
      
      
      
      
      
    </div>
  );
}

export default AboutPage;

