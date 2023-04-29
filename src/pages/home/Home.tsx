import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import celular from '../../assets/images/celular.png';

export default function Home () { 
    const navigate = useNavigate()
    return (
        <>
        <section className="login">
            <h2>From Earth</h2>
          <div className="">
          <img src={celular}  width="600px"/>
          </div>
            
        </section>

        </>
    )

}
