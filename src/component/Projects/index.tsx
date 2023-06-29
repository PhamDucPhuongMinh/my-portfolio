import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setDetailProject } from "../../redux/slices/detailProjectSlice";
import { projectList } from "../../data";
import { ProjectType } from "../../types";

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const handleShowDetailProject = (project: ProjectType) => {
    dispatch(
      setDetailProject({
        isShow: true,
        title: project.projectName,
        content: project.projectDetail,
        imageList: project.imageList,
      })
    );
  };
  return (
    <div id="projects" className="projects my-container">
      <div className="projects__heading">
        <h3 className="text-uppercase text-center pb-5">projects</h3>
        <p className="text-center mt-4">
          Here you will find some personal projects and products that I have
          participated in during my study and work.
        </p>
      </div>
      <div className="projects__content">
        <div className="projects__content__list">
          {projectList.map((item) => {
            return (
              <div key={item.id} className="projects__content__item">
                <div className="projects__item__image">
                  <img src={item.projectImage} width={"100%"} alt="" />
                </div>
                <div className="projects__item__info d-flex align-items-start justify-content-center flex-column">
                  <h2 className="mb-4 fw-bold">{item.projectName}</h2>
                  <p className="mb-4">{item.projectIntro}</p>
                  <div className="projects__item__buttons d-flex">
                    <a
                      href={item.projectDemoUrl}
                      className="btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                    <button
                      className="btn-primary"
                      onClick={() => handleShowDetailProject(item)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
