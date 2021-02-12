import React, { useState, useEffect } from "react";
import { Back, Header, SortWrapper, Title, EmptyBox, EmptyBoxContainer } from "./style";
import { sortBy } from "lodash-es";
import { Link } from "react-router-dom";
import { useLogin } from "@/pages/login/store";
import { useSort } from "@/pages/sort/store";
import { useListener, useEmit } from "@/lib/websocket/hooks";

import YourSort from "./components/YourSort";
import AllSort from "./components/AllSort";
import Loading from "@/components/Loading/";

const sortBackgroundColor = ["#3FBEFF", "#FD6060", "#7D7D7D"];
const sortTextColor = ["#2a2a2a", "#2a2a2a", "#2a2a2a"];

function SortPage() {
  const [status, setStatus] = useState(0);
  const [handleEmpty, setHandleEmpty] = useState(false);
  const [list, updateSortList] = useSort((state) => [state.list, state.updateSortList]);
  const userId = useLogin((state) => state.userId);
  const getRank = useEmit("rankList");

  const sortList = () => {
    let temp = list;
    temp = sortBy(temp, (item) => -item.score);
    temp.forEach((item, index) => {
      item.sort = index + 1;
      item.backgroundColor = sortBackgroundColor[index] || "rgba(0,0,0,0)";
      item.textColor = sortTextColor[index] || "#8B8B8B";
    });
    return temp;
  };

  const formatList = () => {
    const temp = sortList();
    temp.forEach((item) => {
      item.myGroup = item.members.some((user) => user.userId === parseInt(userId));
      item.members.forEach((user) => {
        user.mine = user.userId === parseInt(userId);
      });
    });
    return temp;
  };

  const yourSortList = () => {
    return formatList().filter((item) => item.members.some((user) => user.mine));
  };

  useEffect(() => {
    getRank("");
  }, []);

  useListener("rank", (res) => {
    if (res.status) {
      const rankList = res.data.rank;
      setHandleEmpty(!rankList.length);
      updateSortList(rankList);
      setStatus(res.status);
    } else {
      console.log("网络错误");
    }
  });

  return (
    <SortWrapper>
      <Header>
        <Title>成绩单</Title>
        <Link to={"/home/"}>
          <Back>返回首页</Back>
        </Link>
      </Header>
      {status ? (
        handleEmpty ? (
          <EmptyBoxContainer>
            <EmptyBox />
            好像还没有人拼完嗷
          </EmptyBoxContainer>
        ) : (
          <div>
            <YourSort list={yourSortList()} />
            <AllSort list={formatList()} />
          </div>
        )
      ) : (
        <Loading />
      )}
    </SortWrapper>
  );
}

export default SortPage;
