import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AlunoRegister from './Pages/AlunoRegister';
import Dashboard from './Pages/Dashboard';
import Cursos from './Pages/Disciplinas&Materias';
import ProfessorRegister from './Pages/ProfessorRegister';

function RoutesApp(){
    return(
        <Routes>
            <Route exact path={'/'} element={ <Dashboard />} />
            <Route path={'/alunoRegister'} element={ <AlunoRegister />} />
            <Route path={'/professorRegister'} element={ <ProfessorRegister />} />
            <Route path={'/cursoRegister'} element={ <Cursos />} />
        </Routes>
    )
}

export default RoutesApp;