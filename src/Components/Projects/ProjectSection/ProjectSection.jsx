import { useEffect, useState } from "react";

import SectionTitle from "../../SectionTitle/SectionTitle";
import ProjectItem from "../../Items/ProjectItem/ProjectItem";

import { MdSearch } from "react-icons/md";

import { FullProjectData } from "../../../Assets/Data/ProjectData";

import { ProjectStyle } from "./styles";

const ProjectSection = () => {
    const [searchText, setSearchText] = useState("")
    const [projectData, setProjectData] = useState(FullProjectData)

    useEffect(() => {
        if (searchText === "") return

        setProjectData(() =>
            FullProjectData.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        )
    }, [searchText])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
        if (!e.target.value.length > 0) {
            setProjectData(FullProjectData)
        }
    }

    return (
        <>
            <ProjectStyle>
                <div className="container">
                    <SectionTitle
                        heading="Projects"
                        suheading="Some of my recent works"
                    />

                    <div className="projects_searchBar">
                        <form>
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleChange}
                                placeholder="Project Name"
                            />
                            <MdSearch className="searchIcon" />
                        </form>
                    </div>

                    <div className="projects_allItems">
                        {projectData.map((item) => (
                            <ProjectItem
                                key={item.id}
                                title={item.name}
                                img={item.img}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </ProjectStyle>
        </>
    )
}

export default ProjectSection