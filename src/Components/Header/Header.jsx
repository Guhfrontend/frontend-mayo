import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={s.header}>
            <h1><a href="https://www.linkedin.com/company/mayo-consultoria/" target='_blank'>Mayo Consultoria</a></h1>
            <nav>
                <Link href="#">Inicio</Link>
                <Link href="#">Login</Link>
                <Link href="#">Sair</Link>
            </nav>
        </header>
    )
}
