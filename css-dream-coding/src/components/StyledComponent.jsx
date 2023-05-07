
import Button1 from './Button1';
import Button2 from './Button2';
import styled,{css} from 'styled-components';
const Container = styled.div`
display: flex;
`
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #3c5b69;
color: #b9eaff;
margin: 0 1em;
padding: 0.25em 1em;
${(props)=>{ return(
  props.primary &&
  css`
  background: red;
  color:white;
  `)
}}
`

function StyledComponent() {
  return (
    <div>
        <Button1/>
        <Button2/>
        <Container>
          <Button>Normal Button</Button>
          <Button primary>primary Button</Button>
      </Container>
    </div>
  );
}

export default StyledComponent;
