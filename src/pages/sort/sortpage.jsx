import React from 'react';
import {
  Back,
  Header,
  SortWrapper,
  Title
} from './style'
import YourSort from './components/YourSort/'
import AllSort from './components/AllSort/'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

const sortBackgroundColor = [
  '#3FBEFF', '#FD6060', '#7D7D7D'
];

const sortTextColor = [
  '#2a2a2a', '#2a2a2a', '#2a2a2a'
];

function SortPage({list, userId}) {
  const sortList = () => {
    let temp = list;
    temp = _.sortBy(temp, item => -item.score);
    temp.forEach((item, index) => {
      item.sort = index + 1;
      item.backgroundColor = sortBackgroundColor[index] || 'rgba(0,0,0,0)'
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

  return (
    <SortWrapper>
      {console.log(allSortList())}
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
      <YourSort list={yourSortList()}/>
      <AllSort list={allSortList()}/>
    </SortWrapper>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.login.userId,
    token: state.login.token,
    list: state.sort.list
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPage);
