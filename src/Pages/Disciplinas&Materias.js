import { useState } from 'react'
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../FirestoreConnection';
import { ContentContainer, MainContainerBlue } from '../Styles/Containers';
import { LogoProfile, SideBar, SidebarItem, SideBarTitle, SidebarProfile, SidebarItemContainer, SidebarSelection, Separator, Separator2, SeparatorWhite } from '../Styles/SideBar';
import { Titles, TitlesWhite } from '../Styles/Titles & Subtitles';
import { FormContainer, Labels, SectionForm, SectionItem } from '../Styles/Forms';
import { Inputs } from '../Styles/inputs';
import { SendBTN } from '../Styles/Buttons';
import {ReactComponent as Home} from '../Styles/img/home.svg';
import {ReactComponent as Group} from '../Styles/img/users-alt.svg';
import {ReactComponent as User} from '../Styles/img/user.svg';
import {ReactComponent as Add} from '../Styles/img/add.svg';
import { Link } from 'react-router-dom';

function Cursos(){
    const [disciplina, setDisciplina] = useState('');
    const [curso, setCurso] = useState('');
    const [materia1, setMateria1] = useState('');
    const [materia2, setMateria2] = useState('');
    const [materia3, setMateria3] = useState('');
    const [professor, setProfessor] = useState('');
    const [semestre, setSemestre] = useState(null);
    const [materiastotais, setMateriasTotais] = useState([]);

    // Function that register a new course.
    function CursoRegister(){
        let DBRef = doc(collection(db,"Curso"));
        let data = setDoc(DBRef,{
            Curso: curso,
            Disciplina: disciplina,
            Materia1: materia1,
            Materia2: materia2,
            Materia3: materia3,
            Semestre: semestre,
            Professor: professor
        }).then(()=>{
            alert('Materia cadastrada com sucesso!')
        }).catch((e)=>{
            alert('Erro ao cadastrar Curso')
        })
    }

    // Trigger to create a new course.
    function HandleRegister(e){
        e.preventDefault();
        CursoRegister(curso,disciplina,materia1,materia2,materia3,semestre, professor);
    }

    return(
        <MainContainerBlue>
            <SideBar>
                <SidebarProfile>
                    <LogoProfile src={require('../Styles/img/profile.png')} />
                    <SideBarTitle>Administrador</SideBarTitle>
                    <Separator />
                </SidebarProfile>
                
                <SidebarSelection>
                    <SidebarItemContainer>
                        <Home style={{ width: '20px', height: '100%'}} />
                        <Link className={'NavigationLinkSidebar'} to={'/'}>Home</Link>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Group style={{ width: '20px', height: '100%'}} />
                        <Link className={'NavigationLinkSidebar'} to={'/alunoRegister'}>Alunos</Link>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <User style={{ width: '20px', height: '100%'}} />
                        <Link className={'NavigationLinkSidebar'} to={'/professorRegister'}>Professores</Link>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Add style={{ width: '20px', height: '100%'}} />
                        <Link className={'NavigationLinkSidebar'} to={'/cursoRegister'}>Cadastrar Curso</Link>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Add style={{ width: '20px', height: '100%'}} />
                        <SidebarItem >Lorem Ipsum</SidebarItem>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Add style={{ width: '20px', height: '100%'}} />
                        <SidebarItem>Lorem Ipsum</SidebarItem>
                    </SidebarItemContainer>

                </SidebarSelection>
            </SideBar>

            <ContentContainer>
                <Titles>Cursos</Titles>
                <Separator2></Separator2>
                <FormContainer onSubmit={HandleRegister}>
                <TitlesWhite >Adicionar Cursos</TitlesWhite>
                <SeparatorWhite />
                <SectionForm>
                    <SectionItem>
                        <Labels style={{marginBottom: '2%'}}>Nome do curso</Labels>
                        <Inputs style={{marginBottom: '2%'}} onChange={(e)=>setCurso(e.target.value)} />
                        <Labels style={{marginBottom: '2%'}}>Nome da Disciplina</Labels>
                        <Inputs onChange={(e)=>setDisciplina(e.target.value)} />
                    </SectionItem>
                
                    <SectionItem>
                        <Labels style={{marginBottom: '2%'}}>Matéria 1</Labels>
                        <Inputs style={{marginBottom: '2%'}} onChange={(e)=>setMateria1(e.target.value)} />
                        <Labels style={{marginBottom: '2%'}}>Matéria 2</Labels>
                        <Inputs onChange={(e)=>setMateria2(e.target.value)} />
                    </SectionItem>
                </SectionForm>

                <SectionForm>
                    <SectionItem>
                    <Labels style={{marginBottom: '2%'}}>Matéria 3</Labels>
                    <Inputs style={{marginBottom: '2%'}} onChange={(e)=>setMateria3(e.target.value) } />
                    <Labels style={{marginBottom: '2%'}}>Semestre</Labels>
                    <Inputs onChange={(e)=>setSemestre(e.target.value)} />
                </SectionItem>
                
                <SectionItem style={{marginTop: '-9%'}}>
                    <Labels style={{marginBottom: '2%'}}>Nome do professor</Labels>
                    <Inputs onChange={(e)=>setProfessor(e.target.value)} />
                </SectionItem>
               
                </SectionForm>
                <SendBTN type='submit'>Enviar</SendBTN>
                </FormContainer>
            </ContentContainer>
        </MainContainerBlue>
    )
}

export default Cursos;