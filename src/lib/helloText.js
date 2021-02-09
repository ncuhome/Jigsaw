import _ from 'lodash'

export default function halo(){
  const haloText = [
    'Aloha!','Hallo!','Hello!','你来啦，','你好啊，'
  ];
  return haloText[_.random(0, haloText.length - 1)]
};