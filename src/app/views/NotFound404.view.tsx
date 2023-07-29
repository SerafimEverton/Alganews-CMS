import Button from "../components/Button/Button";
import notFound from '../../Assets/not_found.svg'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const history = useNavigate()
    return <NotFound404Wrapper>
      <span>
        Ooops!
      </span>
    <h1>Não encontrado - 404</h1>
    <img src={notFound} alt="Não encontrado" />
    <Button 
    variant="primary" 
    label="Voltar para a Home" 
    onClick={() => history('/')} 
    />
    </NotFound404Wrapper>
  }

  const NotFound404Wrapper = styled.div`
  
  min-height: 100%vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  gap: 32opx;

 span {
  font-size: 72px;
 }

 h1 {
  font-size: 18px;
  font-weight: 400;
 }

  `  