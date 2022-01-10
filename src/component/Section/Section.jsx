import PropTypes from 'prop-types';
import { Title, SectionContainer } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title> {title}</Title>
      <div>{children}</div>
    </SectionContainer>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
