import React from 'react';
import {
  AllSortContainer,
  Title,
  Item,
  Number,
  Card,
  Name,
  MembersContainer,
  Member,
  ScoreNumber,
  ScoreText,
  Score,
  CardHead
} from './style'

function AllSort({list}) {
  return (
    <AllSortContainer>
      <Title>
        所有排名
      </Title>
      {list.map(item => (
        <Item key={item.roomName}>
          <Number bg={item.backgroundColor} textColor={item.textColor}>
            {item.sort}
          </Number>
          <Card myGroup={item.myGroup}>
            <CardHead>
              <Name>
                {item.roomName}
              </Name>
              <Score>
                <ScoreNumber>
                  {item.score}
                </ScoreNumber>
                <ScoreText>
                  分
                </ScoreText>
              </Score>
            </CardHead>
            <MembersContainer>
              {item.members.map(user => (
                <Member key={user.userId} mine={user.mine}>
                  {user.username}
                </Member>
              ))}
            </MembersContainer>
          </Card>
        </Item>
      ))}
    </AllSortContainer>
  )
}

export default AllSort