import { jwtDecode } from 'jwt-decode';
export const useAuth = () => {
    const user = localStorage.getItem("token");
    if (user) {
        const decodedToken = jwtDecode(localStorage.getItem("token")); // JWT'ni dekodlash
        return decodedToken.role
    }
    else
        return ''
};

