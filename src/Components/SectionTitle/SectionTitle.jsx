import { SectionTitleStyle } from "./styles"

const SectionTitle = ({ subheading, heading }) => {
    return (
        <SectionTitleStyle className="section-title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    )
}

export default SectionTitle