import styled from 'styled-components';

export const ContactWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  margin-top: 20px;
  padding: 0;

  list-style: none;
`;

export const ContactListItem = styled.li``;

export const Span = styled.span`
  font-size: 24px;
  padding-right: 12px;
`;

export const ContactListBtn = styled.button`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;

  color: grey;
  text-shadow: 1px 1px 1px #d1c4c4;
  background-color: white;

  font-size: 16px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #f28f2c;

  border-radius: 10px;
  box-shadow: rgba(216, 225, 215, 0.24) 0px 3px 8px;
`;