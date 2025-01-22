let authorization;
let userType = 'employee'

switch(userType) {
    case 'employee':
        authorization = 'You are authorized to access Dietary Services';
        break;
    case 'enrolled member':
        authorization = 'You are authorized to access Dietary Services and have one-on-one interaction with a dietician';
        break;
    case 'subscriber':
        authorization = 'You are authorized to access Dietary Services with limited access'
        break;
    default:
        authorization = 'You need to be an enrolled member or subscriber to access Dietary Services';
        break;
}

console.log(authorization);