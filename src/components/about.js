import { Badge } from 'react-bootstrap';
import { FaJenkins, FaGitAlt, FaDocker, FaPython, FaAws } from 'react-icons/fa';
import { SiMicrosoftazure, SiTerraform, SiPrometheus, SiGnubash} from 'react-icons/si'
import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol} from '../utils/styles'
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const StyledBadge = styled(Badge)`
    font-size:100%;
    margin: 0.3em;
`

const About = ({id}) => {
    const one = <StyledSpan><h5><AccentedIndex>[1]</AccentedIndex></h5><h3>About me</h3></StyledSpan>
    const two = <p>Hello! My name is Ashish and I am a DevOps Engineer and I enjoy Cloud Development.</p>
    const three = <p>I currently work at <StyledLink target="_blank" rel="nofollow" href="https://www.softel.com/" className="content-hover-link">SOFTEL Communications</StyledLink> as part of the engineering squad as a,<StyledLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashishupadhyay05/" className="content-hover-link"> Microsoft Technical Sales Architect.</StyledLink></p>
    const four = <p>Here are a few technologies I am proficient in:</p>

    const technology = [
        { icon: FaAws, name: 'AWS', color: '#FF9900'},
        { icon: SiMicrosoftazure, name: 'Azure', color: '#008AD7' },
        { icon: FaJenkins, name: 'Jenkins', color: '#D33834'},
        { icon: FaGitAlt, name: 'Git', color: '#EA2F30'},
        { icon: FaDocker, name: 'Docker', color: '#2449D8'},
        { icon: SiTerraform, name: 'Terraform', color: '#8F00FF'},
        { icon: SiPrometheus, name: 'Prometheus', color: '#FF6700' },
        { icon: FaPython, name: 'Python', color: '#F2C53D'},
        { icon: SiGnubash, name: 'Bash', color: '#808080'}
    ]

    const five = <p style={{textAlign: 'center'}}>
        {technology.map(tech => <StyledBadge pill style={{ background: tech.color }}>
            <tech.icon /> {tech.name}
        </StyledBadge>)}
        </p>
    const items = [one, two, three, four, five]
    return (
        <StyledContainer id={id} fluid="lg">
            <StyledRow>
                <StyledCol>
                    <Fade triggerOnce = {true}>
                        {items.map((item, i) => (<div>{item}</div>
                        ))}
                    </Fade>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

export default About;
