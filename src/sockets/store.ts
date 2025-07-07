type UserRole = "patient" | "staff";

export interface UserInfo {
  userId: number;
  role: UserRole;
  roomNumber: string | null;
  socketId: string;
}

const userIdToUser = new Map<number, UserInfo>();
const socketIdToUserId = new Map<string, number>();

export function setUser(socketId: string, user: Omit<UserInfo, "socketId">) {
  const existing = userIdToUser.get(user.userId);
  if (existing) {
    socketIdToUserId.delete(existing.socketId);
  }
  const userInfo: UserInfo = { ...user, socketId };
  userIdToUser.set(user.userId, userInfo);
  socketIdToUserId.set(socketId, user.userId);
}

export function removeSocket(socketId: string) {
  const userId = socketIdToUserId.get(socketId);
  if (userId !== undefined) {
    userIdToUser.delete(userId);
    socketIdToUserId.delete(socketId);
  }
}

export function removeUser(userId: number) {
  const user = userIdToUser.get(userId);
  if (user) {
    socketIdToUserId.delete(user.socketId);
    userIdToUser.delete(userId);
  }
}

export function getUserBySocket(socketId: string): UserInfo | undefined {
  const userId = socketIdToUserId.get(socketId);
  if (userId === undefined) return undefined;
  return userIdToUser.get(userId);
}

export function getUserById(userId: number): UserInfo | undefined {
  return userIdToUser.get(userId);
}

export function getAllUsers(): UserInfo[] {
  return Array.from(userIdToUser.values());
}

export function getUsersByRole(role: UserRole): UserInfo[] {
  return Array.from(userIdToUser.values()).filter((user) => user.role === role);
}

export function getUsersByRoom(roomNumber: string): UserInfo[] {
  return Array.from(userIdToUser.values()).filter(
    (user) => user.roomNumber === roomNumber
  );
}

export function clearStore() {
  userIdToUser.clear();
  socketIdToUserId.clear();
}
