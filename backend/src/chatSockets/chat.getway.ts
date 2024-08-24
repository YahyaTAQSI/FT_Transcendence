import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  async handleConnection(client: Socket) {}
  async handleDisconnect(client: Socket) {}

  sendMessage(message: any) {
    this.server.emit('message', message);
  }
  updateRoles(usersRoles: any) {
    this.server.emit('updateRoles', usersRoles);
  }
  updateUsersAfterSomeoneKick(usersRoles: any) {
    this.server.emit('updateUsersAfterSomeoneKick', usersRoles);
  }
  updateChannels() {
    this.server.emit('updateChannels');
  }
  sendNotification(notification: any) {
    this.server.emit('notification', notification);
  }
  deleteNotification(notification: any) {
    this.server.emit('delete_notification', notification);
  }

  /******** 2 times */
  updateFriendStatus(friend: any) {
    this.server.emit('update_friend_status', friend);
  }

  /******** 3 times */
  updateFriendList(friend: any) {
    this.server.emit('update_friend_list', friend);
  }

  /******** 2 times */
  updateBlockedFriend(friend: any) {
    this.server.emit('update_blocked_friend', friend);
  }

  /******** 2 times */
  updateAllUsers(friend: any) {
    this.server.emit('update_All_Users', friend);
  }
  /**-------------------------------------- */
  updateOnlineFriendList() {
    this.server.emit('update_friend_list_game');
  }
}
