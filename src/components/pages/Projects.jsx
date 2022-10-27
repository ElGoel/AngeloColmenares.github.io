import React from "react";
import { githubApi } from "../../api/axiosInstance";

const initialState = [{
  name: '',
  description: '',
  languages: {},
}]

const Projects = () => {
  const [projectsData, setProjectsData] = React.useState(initialState);

  React.useEffect(() => {
    const getGitHubData = async () => {
      await githubApi
        .get("users/ElGoel/repos")
        .then((response) => {
          const portfolio = response.data.filter((item) => {
            return (
              item.name === "pokedex_React" ||
              item.name === "ElGoel.github.io"
            );
          });
          setProjectsData(prevProjects => {
            return portfolio.map(project => {
              return {
                name: project.name,
                description: project.description,
              }
            })
          });
        })
        .catch((err) => console.error(err));
    };
    getGitHubData();
  }, []);

  return (
    <section>
      {projectsData.map(project => (
        <h2>{project.name}</h2>
      ))}
    </section>
  );
};

export default Projects;
