import styled from 'styled-components'

export const Title = styled.div`
  font-weight: bold;
  color: #E05D05;
  font-size: 18px;
`
export const RemoveLine = styled(Title)`
  margin: auto 0;
  color: red;
  :hover {
    cursor: pointer;
  }
`

export const AddLine = styled(RemoveLine)`
  color: #1A6C96;
`

export const Input = styled.input`
  padding:5px; 
  border:2px solid #ccc; 
  -webkit-border-radius: 5px;
  border-radius: 5px;
  max-width: 250px;
`
