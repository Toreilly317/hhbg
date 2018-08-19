import styled from "styled-components";

export const SampleFormContainer = styled.div`
  background: red;
  padding: 10px;
  display: grid;
  grid-template-columns: minmax(50px, 100px) 1fr;
  grid-gap: 5px;
  margin-bottom: 10px;
`;

export const SampleformInputGroup = styled.div`
  display: grid;
  & input:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SampleFormActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
