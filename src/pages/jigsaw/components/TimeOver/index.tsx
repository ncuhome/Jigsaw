import React, { useState, useEffect } from "react";
import { HelpContainer, HelpContent, BackGround } from "./style";

interface Props {
  visible: boolean;
  submit: () => void;
}

const TimeOver: React.FC<Props> = ({ visible, submit }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (time > 0) {
      timer = setTimeout(() => setTime((t) => t - 1), 1000);
    } else {
      setTime(0);
      submit();
    }
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <HelpContainer show={visible}>
      <BackGround />
      <HelpContent>
        <p>已经过了好久了，{time}秒后提交</p>
      </HelpContent>
    </HelpContainer>
  );
};

export default TimeOver;
