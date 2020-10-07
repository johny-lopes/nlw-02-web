import React from 'react';

import api from '../../services/api';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    teacher: {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name:string;
        subject: string;
        whatsapp: string
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function craeteNewConnection() {
        api.post('connections', {
           user_id: teacher.id 
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={craeteNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;