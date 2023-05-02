Login JWT / API REST (Node,js, Express, Bcrypt, Mongoose, Jwt, MongoDB)

Este é um projeto de API REST que implementa autenticação de usuário com JSON Web Token (JWT). Ele foi desenvolvido usando Node.js, Express, Bcrypt, Mongoose e JWT.

A API fornece endpoints para registro e autenticação de usuários. O registro de usuário requer um nome de usuário, um endereço de email e uma senha, que é criptografada usando a biblioteca Bcrypt antes de ser armazenada no banco de dados MongoDB usando o Mongoose.

Após o registro, os usuários podem fazer login usando seu email e senha. Se as credenciais estiverem corretas, a API retorna um token JWT, que deve ser usado para autorização em endpoints protegidos.

A API inclui um middleware de autenticação JWT que verifica se o token enviado pelo cliente é válido e permite o acesso apenas a usuários autenticados.
