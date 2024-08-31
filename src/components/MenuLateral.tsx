
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../styles/MenuLateral.css';

const MenuLateral = () => {
  return (


    <div className="sidebar">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <div className="logo">
        <h1>Thoth</h1>
      </div>
      <nav className="nav-menu">

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            home
          </span>
          <Link href="/" className="nav-item"><div ></div>Inicio</Link>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            book_2
          </span>
          <Link href="/about" className="nav-item"><div></div>Disciplinas</Link>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            calendar_month
          </span>
          <Link href="/services" className="nav-item"><div></div>Eventos</Link>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            group
          </span>
          <Link href="/contact" className="nav-item"><div></div>Conexões</Link>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            groups
          </span>
          <Link href="/about" className="nav-item"><div></div>Grupos</Link>
          <h4 className="NotaEmbreve">Em breve</h4>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            assignment_turned_in
          </span>
          <Link href="/services" className="nav-item"><div></div>Atividades</Link>
          <h4 className="NotaEmbreve">Em breve</h4>
        </li>

        <li className="menu-item">
          <span className="material-symbols-outlined iconMenuLateral">
            content_paste_search
          </span><Link href="/contact" className="nav-item"><div></div>Pesquisas</Link>
          <h4 className="NotaEmbreve">Em breve</h4>
          </li>

      </nav>
    </div>
  );
};

export default MenuLateral;
