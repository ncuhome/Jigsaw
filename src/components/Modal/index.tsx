import React from "react";
import { HelpContainer, HelpContent, BackGround, Back, Quit, Decs } from "./style";
import { noop } from "lodash-es";

interface Props {
  title: string;
  visible: boolean;
  decs?: string;
  activeText?: string;
  commonText?: string;
  activePress?: any;
  closePress?: any;
}

const Modal: React.FC<Props> = ({
  title,
  decs,
  visible,
  activeText = "确定",
  commonText = "返回",
  activePress = noop,
  closePress = noop,
}) => {
  return (
    <HelpContainer show={visible}>
      <BackGround onClick={closePress} />
      <HelpContent>
        <p>{title}</p>
        {decs ? <Decs>{decs}</Decs> : null}
        <Quit onClick={activePress}>{activeText}</Quit>
        <Back onClick={closePress}>{commonText}</Back>
      </HelpContent>
    </HelpContainer>
  );
};

export default Modal;
