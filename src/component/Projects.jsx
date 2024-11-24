import './css_file/Projects.css'; 
import { useState } from 'react';  

const Projects = () => {
  const projectData = [
    {
      title: 'Weather App',
      imageUrl: './images/weather.png',
      projectUrl: 'http://weather-app-eta-green-59.vercel.app', 
      description: 'A weather app that provides real-time weather information, forecasts, and alerts.'
    },
    {
      title: 'Image-Finder',
      imageUrl: './images/Search_Img.png', 
      projectUrl: 'https://search-img-xi.vercel.app/', 
      description: 'An image finder web tool that helps users search for images using keywords or by uploading an image.'
    },
    {
      title: 'Github Profile Finder',
      imageUrl: './images/githubprofileviewer.png', 
      projectUrl: 'https://github-profile-viewer-ochre.vercel.app/', 
      description: 'A GitHub Profile Viewer allows users to view the public information of a GitHub user or developer.'
    },
    {
      title: 'TicTacToe',
      imageUrl: './images/tic-tac-toe.png', 
      projectUrl: 'https://tic-tac-toe-yuvraj-yadavs-projects-6e99a305.vercel.app/', 
      description: 'Tic-Tac-Toe is a simple two-player game where players take turns marking spaces on a 3x3 grid with either an "X" or an "O." '
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section className="projects-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-container">
                <div className="image-slider">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image"
                    onClick={() => openModal(project.imageUrl)}
                  />
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Project Preview" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
