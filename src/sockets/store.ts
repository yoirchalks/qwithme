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

export function deleteUser(userId: string) {
  usersStore.delete(userId);
}

export function getAllUsers() {
  return Array.from(usersStore.values());
}
export function deleteAllUsers() {
  return usersStore.clear();
}
