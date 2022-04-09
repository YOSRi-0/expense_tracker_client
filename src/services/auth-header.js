export default function authHeader(currentUser) {
  if (currentUser && currentUser.token) {
    return { Authorization: 'Bearer ' + currentUser.token };
  }
  return {};
}
