import { Link } from 'react-router-dom';

import { FiGithub } from 'react-icons/fi';

import { ProjectItemStyle } from './styles';

const ProjectItem = ({
    img,
    title = "Project Title",  
    desc = "Project Description", 
    icon = <FiGithub />,
    link = "#", 
}) => {

    const openLink = () => {
        window.open(link, "_blank");
    }

    return (
        <ProjectItemStyle>
            <div className="projectItem_img">
                <img src={img} alt={title} />
            </div>

            <div className="projectItem_info">
                <Link to={link}>
                    <h3 className="projectItem_title">{title}</h3>
                </Link>

                <p className="projectItem_desc">{desc}</p>
                <div className="projectItem_Referral">
                    <Link onClick={openLink}>
                        <p className="projectItem_Link">View full project</p>
                    </Link>
                </div>
            </div>
        </ProjectItemStyle>
    )
}

export default ProjectItem