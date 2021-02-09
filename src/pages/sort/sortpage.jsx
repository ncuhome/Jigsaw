import React, {useState, useEffect} from 'react';
import {
  Back,
  Header,
  SortWrapper,
  Title,
  EmptyBox,
  EmptyBoxContainer
} from './style'
import YourSort from './components/YourSort/'
import AllSort from './components/AllSort/'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {listenRank, getRank, removeSocket} from '../../lib/ws'
import {actionCreator} from "./store";
import Loading from '../common/Loading/index'
import _ from 'lodash'

const sortBackgroundColor = [
  '#3FBEFF', '#FD6060', '#7D7D7D'
];

const sortTextColor = [
  '#2a2a2a', '#2a2a2a', '#2a2a2a'
];

function SortPage({list, userId, updateSortList}) {
  const [status, setStatus] = useState(0);
  const [handleEmpty, setHandleEmpty] = useState(0);
  const sortList = () => {
    let temp = list;
    temp = _.sortBy(temp, item => -item.score);
    temp.forEach((item, index) => {
      item.sort = index + 1;
      item.backgroundColor = sortBackgroundColor[index] || 'rgba(0,0,0,0)';
      item.textColor = sortTextColor[index] || '#8B8B8B'
    });
    return temp
  };

  const formatList = () => {
    const temp = sortList();
    temp.forEach(item => {
        item.myGroup = item.members.some(user => user.userId === parseInt(userId));
        item.members.forEach(user => {
            user.mine = user.userId === parseInt(userId);
          }
        )
      }
    );
    return temp
  };

  const yourSortList = () => {
    return formatList().filter(
      item => item.members.some(user => user.mine)
    )
  };

  const allSortList = () => {
    return formatList()
  };

  useEffect(() => {
    getRank('');
  }, []);

  useEffect(() => {
    listenRank(res => {
      if(res.status){
        const rankList = res.data.rank;
        setHandleEmpty(!rankList.length);
        updateSortList(rankList);
        setStatus(res.status);
        console.log(rankList)
      }else{
        console.log('网络错误')
      }
    });
    return () => removeSocket('rank')
  }, []);

  return (
    <SortWrapper>
      <Header>
        <Title>
          成绩单
        </Title>
        <Link to={"/home/"}>
          <Back>
            返回首页
          </Back>
        </Link>
      </Header>
      {
        status ?
          handleEmpty ?
            <EmptyBoxContainer>
              <EmptyBox/>
              好像还没有人拼完嗷
            </EmptyBoxContainer> :
            <div>
              <YourSort list={yourSortList()}/>
              <AllSort list={allSortList()}/>
            </div> :
          <Loading/>
      }
    </SortWrapper>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.login.userId,
    token: state.login.token,
    list: state.sort.list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortList(data) {
      dispatch(actionCreator.updateSortListAction(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPage);
