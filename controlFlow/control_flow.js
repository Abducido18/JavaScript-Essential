let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = 'Full access granted';
} else if (userRole === 'manager') {
    accessLevel = 'Limited access granted';
} else {
    accessLevel = 'No access granted';
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome Admin!';
    } else {
        userMessage = 'Welcome User!';    
    }
} else {
    userMessage = 'Please log in to acess the system';
}

console.log('User Message: ', userMessage);

let userType = 'Suscriber';
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'susbscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log('User Category: ', userCategory);

let isAuthenticated = true;
let authenticatedStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';

console.log('Authentication Status: ', authenticatedStatus);