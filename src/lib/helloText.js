import { random } from 'lodash-es';

export default function halo() {
  const haloText = ['Aloha!', 'Hallo!', 'Hello!', '你来啦，', '你好啊，'];
  return haloText[random(0, haloText.length - 1)];
}
