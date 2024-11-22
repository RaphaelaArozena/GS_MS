import Redis from 'ioredis';

const redis = new Redis({
  host: '127.0.0.1', 
  port: 6379,        
  password: 'sua-senha', 
});

redis.on('connect', () => console.log('Conectado ao Redis!'));
redis.on('error', (err) => console.error('Erro ao conectar ao Redis:', err));

export default redis;
