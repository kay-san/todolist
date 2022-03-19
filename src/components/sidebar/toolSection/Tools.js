import styled from 'styled-components'

const Tools = ({items, selectedState}) => {
  const [selected, setSelected] = selectedState 
  const handleClick = (itemName) => {
    setSelected(itemName)
  }
  return (
    <Container>
      {items.map(item => 
        <Tool selected={selected} itemName={item[0]} onClick={() => handleClick(item[0])}>
          <Icon>{item[1]}</Icon>
          <ItemHeader>{item[0]}</ItemHeader>
        </Tool>
      )}
    </Container>
  )
}

const Container = styled.div`
    flex:3;
`  
const Tool = styled.div`
  display:flex; 
  padding:20px 40px;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  transition: all 0.2s ease-in;
  ${props => props.selected === props.itemName ? {
    color:'black'
  } : {
    color:'#c9c9c9'
  }}
`

const Icon = styled.div`
  flex:2;
`

const ItemHeader = styled.span`
  flex:8;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
  font-size:18px;  

  `
export default Tools