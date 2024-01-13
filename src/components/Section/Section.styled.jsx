import { styled } from 'styled-components';

export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  max-width: 100%;
  width: 700px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
  line-height: 1.11;
  letter-spacing: 0.72px;

  text-shadow: 1px 1px 1px #d1c4c4;

  font-size: 36px;
  font-weight: bold;
`;