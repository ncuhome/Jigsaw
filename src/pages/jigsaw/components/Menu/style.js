import styled, {keyframes} from "styled-components";

export const MenuWrapper = styled.div`
  background: rgba(46,46,46,.92);
  position: absolute;
  top: 0;left: 0;bottom: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: space-between;
  backdrop-filter: blur(15px);
  transform: translateX(-250px);
  transition: transform .35s ease;
`

export const BackArea = styled.div`
  position: absolute;
  top: 0;left: 0;bottom: 0;right: 0;
  display: flex;
`