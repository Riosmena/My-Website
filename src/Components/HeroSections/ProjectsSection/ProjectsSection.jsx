import ProjectItem from "../../Items/ProjectItem/ProjectItem"
import SectionTitle from "../../SectionTitle/SectionTitle"

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/swiper-bundle.min.css"

import { ProjectData } from "../../../Assets/Data/ProjectData";

import { ProjectSectionStyle } from "./styles";

const ProjectsSection = () => {
    SwiperCore.use([Navigation])

    return (
      <ProjectSectionStyle>
        <div className="container">
          <SectionTitle heading="Projects" subheading="Some of my recent works" />
  
          <div className="projects_allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
            {ProjectData.map((project, index) => {
              if (index >= 5) return

              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              )
            })}
            </Swiper>
          </div>
        </div>
      </ProjectSectionStyle>
    )
}

export default ProjectsSection