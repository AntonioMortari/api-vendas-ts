import { server } from '@/server/http';

server.listen(process.env.PORT || 3000, () => console.log('SERVER IS RUNNING ON PORT: ', process.env.PORT));