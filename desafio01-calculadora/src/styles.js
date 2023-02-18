import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #343541;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #3e3e3e;
  width: 50%;
  min-height: 350px;
  max-width: 380px;
  border: solid #3e3e3e 30px;
  border-radius: 5px ;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`