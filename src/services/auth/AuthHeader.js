export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user_token'));
  
    if (user) {
        // console.log("authHeader: " + user);
        return { "Authorization": user };
    } else {
        return {};
    }
}