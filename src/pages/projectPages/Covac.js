import classes from "./Covac.module.css";
import { useState, useEffect } from "react";

function CovacPage() {
  const image_url = "https://gracemmaa.com/images/helios2.png";

  const [isLoading, setIsLoading] = useState(true);
  const [loadedProject, setLoadedProject] = useState([]);

  //const api_url = "http://localhost:1337";
  //api url used as a patch when images need the correct URL path

  //https://stackoverflow.com/questions/61727391/react-js-how-to-show-only-first-object-of-fetched-api

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:1337/covacs")
      .then((response) => {
        console.log("response", response);

        return response.json();
      })
      .then((data) => {
        const projectDetails = [];

        for (const key in data) {
          const projectDetail = {
            id: key,
            ...data[key],
          };

          projectDetails.push(projectDetail);
        }
        //console.log(projectDetails);
        setIsLoading(false);
        setLoadedProject(projectDetails[0]);
        //Pointing to the first [0] result of the array means we will only get the first set of results - ok in this situation

        //console.log(JSON.stringify(projectDetails[0].id));
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
    <div className={classes.container}>
      <img src={image_url} alt="new" className={classes.img}></img>
      <h1>CoVac</h1>

      <div className={classes.context}>
        <div className={classes.contextItem}>
          <h3>Role</h3>
          <p>Product Manager, Designer</p>
        </div>
        <div className={classes.contextItem}>
          <h3>Team</h3>
          <p>Product Manager, Designer</p>
        </div>
        <div className={classes.contextItem}>
          <h3>Duration</h3>
          <p>8 weeks (March 2020 - May 2020)</p>
        </div>
      </div>

      <div>
        <h2>Overview</h2>
        <h3>Challenge</h3>
        <p>{loadedProject.overviewChallenge}</p>

        <h3>Solution</h3>
        <p>{loadedProject.overviewSolution}</p>
      </div>

      <div>
        <h2>Process</h2>
        <h3>User Research</h3>
        <p>{loadedProject.competitiveResearch}</p>
      </div>

      <div>
        <h2>Design</h2>
        <h3>Design Goals</h3>
        <p>Test</p>

        <h3>Prototyping and Evaluation</h3>
        <p>Test</p>
      </div>

      <div>
        <h2>Takeaways</h2>
        <h3>My reflection</h3>
        <p>Test</p>
      </div>
    </div>
  );
}

export default CovacPage;
