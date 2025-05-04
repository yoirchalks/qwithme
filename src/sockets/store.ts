type userRole = "patient" | "staff";

interface userInfo {
  userId: string;
  role: userRole;
  socketId: string;
  room: string;
}

const usersStore = new Map<string, userInfo>();

export function setUser(userId: string, info: userInfo) {
  usersStore.set(userId, info);
}

export function getUser(userId: string) {
  return usersStore.get(userId);
}

export function getUserIdBySocket(socket: string) {
  return Array.from(usersStore.values()).filter(
    (user) => user.socketId === socket
  )[0].userId;
}

export function deleteUser(userId: string) {
  usersStore.delete(userId);
}

export function getAllUsers() {
  return Array.from(usersStore.values());
}

export function deleteAllUsers() {
  return usersStore.clear();
}

export function getUsersByRole(role: userRole): userInfo[] {
  return Array.from(usersStore.values()).filter((user) => user.role === role);
}

export function getUsersByRoom(room: string): userInfo[] {
  return Array.from(usersStore.values()).filter((user) => user.room === room);
}

export function getUsersByRoomAndRole(
  room: string,
  role: userRole
): userInfo[] {
  return Array.from(usersStore.values()).filter(
    (user) => user.room === room && user.role === role
  );
}
