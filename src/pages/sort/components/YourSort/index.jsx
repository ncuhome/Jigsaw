import React from 'react';
import {
  YourSortContainer,
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

function YourSort({list}) {
  return (
    <YourSortContainer>
      <Title>
        你的排名
      </Title>
      {list.map(item => (
        <Item key={item.roomName}>
          <Number bg={item.backgroundColor} textColor={item.textColor}>
            {item.sort}
          </Number>
          <Card>
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
    </YourSortContainer>
  )
}

export default YourSort