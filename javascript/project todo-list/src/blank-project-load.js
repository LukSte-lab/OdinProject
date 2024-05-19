
// Factory function to create blank project array list
export const blankProjectLoad = () => {
    
    console.log("Called blankProjectLoad module...creating blank project array now");
    let projectsArray = [];
    console.log("Pushing the title name of project to the projectArray....");
    let projectTitle = "Default Project";
    projectsArray.push({ projectTitle });
    console.log(projectsArray);
    return { projectsArray, projectTitle };
}