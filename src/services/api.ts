import axios from 'axios';
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL || 'http://localhost:3000/api',withCredentials:true,headers:{'Content-Type':'application/json'}});
export const authApi={
 login:(payload:{email:string;password:string})=>api.post('/auth/login',payload),
 register:(payload:{name:string;email:string;password:string})=>api.post('/auth/register',payload),
 forgot:(payload:{email:string})=>api.post('/auth/forgot-password',payload),
 me:()=>api.get('/auth/me'),
 logout:()=>api.post('/auth/logout')
};
