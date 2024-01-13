import { SectionMain, Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionMain>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
    </SectionMain>
  );
};

