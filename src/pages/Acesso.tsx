// pages/acesso.js
import React from 'react';
import MenuLateral from '../components/MenuLateral'; // Corrigido o caminho e o nome do componente
import LoginRegisterForm from '../components/LoginRegister';
export default function Acesso() {
  return (
    <div>
      <MenuLateral /> {/* Corrigido o uso do componente */}

      <LoginRegisterForm />
    </div>
  );
}
