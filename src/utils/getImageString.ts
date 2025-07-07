export default function getImageString(buffer: Uint8Array) {
  return Buffer.from(buffer).toString("base64");
}
