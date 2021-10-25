import classes from './VLearn.module.css';

function VLearn(){

    const placeholder_problem = "Commuting is largely known as a boring, frustrating, and overall a time-consuming experience. For someone new to a city and looking to make friends, commuting has the potential to be a rich opportunity to connect with other people who might be feeling the same way, who are on similar commute routes as them. We wanted to rethink the way people could engage with others in a more meaningful way, especially to benefit those who want to make new friendships with others, and pass their commute time in a productive way.";

    const image_url = "https://gracemmaa.com/images/helios2.png"
    console.log("Page loaded");

    return(
        
        <div className={classes.container}>
            <img src={image_url} alt="new" className={classes.img}></img>
            <h1>
                v-learn
            </h1>

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
                <p>
                    {placeholder_problem}
                </p>

                <h3>Solution</h3>
                <p>
                    {placeholder_problem}
                </p>

            </div>

            <div>
                <h2>Process</h2>
                <h3>User Research</h3>
                <p>
                    {placeholder_problem}
                </p>
            </div>


            <div>
            <h2>Design</h2>
                <h3>Design Goals</h3>
                <p>
                    {placeholder_problem}
                </p>
                
                <h3>Prototyping and Evaluation</h3>
                <p>
                    {placeholder_problem}
                </p>
            
            </div>


            <div>
            <h2>Takeaways</h2>
                <h3>My reflection</h3>
                <p>
                    {placeholder_problem}
                </p>
            </div>

        </div>
        
    );
}

export default VLearn;
