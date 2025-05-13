import { randomUUID } from "crypto";

type userRole = "patient" | "staff";

interface userInfo {
  userId: number;
  role: userRole | null;
  socketId: string;
  roomNumber: string | null;
}

const usersStore = new Map<string, userInfo>();

export function setUser(uuid: string, info: userInfo) {
  usersStore.set(uuid, info);
}

export function getUser(uuid: string) {
  return usersStore.get(uuid);
}

export function getUserIdBySocket(socket: string) {
  return Array.from(usersStore.values()).filter(
    (user) => user.socketId === socket
  )[0].userId;
}

export function deleteUser(uuid: string) {
  usersStore.delete(uuid);
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

export function getStaffById(id: number) {
  return getUsersByRole("staff").filter((user) => user.userId === id)[0];
}

export function getPatientById(id: number) {
  return getUsersByRole("patient").filter((user) => user.userId === id)[0];
}

export function getUserById(id: number) {
  return getAllUsers().filter((user) => user.userId === id)[0];
}

export function getUsersByRoom(roomNumber: string): userInfo[] {
  return Array.from(usersStore.values()).filter(
    (user) => user.roomNumber === roomNumber
  );
}

export function getUsersByRoomAndRole(
  roomNumber: string,
  role: userRole
): userInfo[] {
  return Array.from(usersStore.values()).filter(
    (user) => user.roomNumber === roomNumber && user.role === role
  );
}
