export default function authHeader(currentUser) {
  console.log(currentUser);
  if (currentUser && currentUser.token) {
    return { Authorization: 'Bearer ' + currentUser.token };
  }
  return {};
}
