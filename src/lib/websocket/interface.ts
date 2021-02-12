import type { RoomMember } from "@/pages/room/store";
import type { GridData } from "@/pages/jigsaw/store";
import type { List } from "@/pages/sort/store";

type Res<T extends unknown> = {
  status: 0 | 1;
  message: string;
  data?: T;
};

export interface Listener {
  token: Res<{}>;
  join: Res<{
    members: RoomMember[];
    roomName: string;
    roomId: number;
  }>;
  broadcastRoomJoin: Res<{
    members: RoomMember[];
    roomName: string;
    roomId: number;
    difficult: number;
    message: string;
  }>;
  leave: Res<{}>;
  broadcastRoomLeave: Res<{
    members: RoomMember[];
  }>;
  // TODO: 待改
  broadcastGameStart: Res<
    {
      [P in keyof GridData]?: GridData[P];
    }
  >;
  start: Res<{}>;
  broadcastMove: {
    jigsawList: number[][];
  };
  broadcastScore: {
    score: number;
  };
  rank: Res<{
    rank: List;
  }>;
}

export interface Emit {
  token: {
    username: string;
    token: string;
  };
  roomJoin: {
    roomName: string;
    username: string;
    difficult?: number;
  };
  roomLeave: {
    username: string;
    roomName: string;
    id?: number;
  };
  gameStart: {
    roomName: string;
    picKind: number;
    jigsawList: number[][];
  };
  gameMove: {
    roomName: string;
    jigsawList: number[][];
  };
  gameCal: {
    roomName: string;
  };
  rankList: {};
}

export type ListenerNamesType = keyof Listener;
export type EmitNamesType = keyof Emit;
