import React from 'react';
import axios from 'axios';
import { fromUint8Array } from 'js-base64';
import { useGrid } from '@/pages/jigsaw/store';
import { pictures } from '@/lib/pictures';

export const usePreFetch = () => {
  const setValue = useGrid((state) => state.setValue);

  const getBase64 = async (pic) => {
    const response = await axios.get(pic, {
      responseType: 'arraybuffer',
    });

    return `data:image/jpeg;base64,${fromUint8Array(new Uint8Array(response.data))}`;
  };

  const saveImage = async () => {
    try {
      const list = [];
      for (let pic of pictures) {
        const image = await getBase64(pic);
        list.push(image);
      }
      setValue('images', list);
      console.log('图片预加载成功');
    } catch (err) {
      console.log('图片预加载失败: ' + err);
    }
  };

  React.useEffect(() => {
    saveImage();
  }, []);
};
