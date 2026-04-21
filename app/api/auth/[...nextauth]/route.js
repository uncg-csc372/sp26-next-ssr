// app/api/auth/[...nextAuth]/route.js
import { handlers } from '../../../services/authService';
export const { GET, POST } = handlers;