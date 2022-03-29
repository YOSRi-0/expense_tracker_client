export default function authHeader() {
  const { currentUser } = JSON.parse(localStorage.getItem('user'));
  if (currentUser && currentUser.accessToken) {
    return { Authorization: 'Bearer' + currentUser.accessToken };
  }
  return {};
}
