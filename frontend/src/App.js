import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api';

function App(){

    const [projects, setprojects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setprojects(response.data);
        });
    }, []);

    async function HandleAddProject() {

        const response = await api.post('projects', { 
            title: `Novo Projeto ${Date.now()}`, 
            owner: "Fernando de Jesus dos Santos"
        });

        const project = response.data;

        setprojects([...projects, project]);
    };

    return (
    <>
        <Header title="Homepage" />

        <button onClick={HandleAddProject}>Add</button>

        <ul>
            {projects.map(project => (<li key={project.id}>{project.title}</li>))}
        </ul>
            
    </>);
}

export default App;