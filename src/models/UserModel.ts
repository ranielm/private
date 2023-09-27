// UserModel.ts

// Definição da interface do modelo de usuário
interface User {
  username: string;
  password: string;
}

// Banco de dados simulado de usuários (apenas para fins de teste)
const users: User[] = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

// Função para encontrar um usuário pelo nome de usuário
const findByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

// Função para encontrar um usuário pelo ID
const findById = (id: number): User | undefined => {
  return users.find((user, index) => index + 1 === id);
};

// Função para adicionar um novo usuário ao banco de dados
const addUser = (user: User): User => {
  // Gere um novo ID (normalmente, você usaria um mecanismo de banco de dados para isso)
  const newId = users.length + 1;
  const newUser: User = { ...user };
  users.push(newUser);
  return newUser;
};

export default {
  findByUsername,
  findById,
  addUser,
};
