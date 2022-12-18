const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000/api' : 'https://prasantmukunddas-94g5sc8ff-dinekumar1998.vercel.app/api';