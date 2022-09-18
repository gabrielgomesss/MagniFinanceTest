import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../FirestoreConnection';
import { CategoryContainer, MainContainerBlue, CategoryContent , CategorySection, CursoContainer, Materia, ContentContainer} from '../Styles/Containers';
import { MateriaLogo, Students } from '../Styles/Images';
import {ReactComponent as Home} from '../Styles/img/home.svg';
import {ReactComponent as Group} from '../Styles/img/users-alt.svg';
import {ReactComponent as User} from '../Styles/img/user.svg';
import {ReactComponent as Add} from '../Styles/img/add.svg';
import { LogoProfile, SideBar, SidebarItem, SideBarTitle, SidebarProfile, SidebarItemContainer, SidebarSelection, Separator } from '../Styles/SideBar';
import { NomeMateria, NomeProfessor, Semestre, TitleCategory, TitleCurso, Titles } from '../Styles/Titles & Subtitles';
import { Link } from 'react-router-dom';
import '../App.css'
function Dashboard(){
    const [curso, setCurso] = useState([]);

    useEffect(()=>{
        // Function that retrieves all discipline data
        function GetDataDisciplinas(){
            const DbRef = collection(db,'Curso');
            getDocs(DbRef).then((value)=>{
                let lista = [];
                value.forEach((doc)=>{
                    lista.push({
                        Disciplina: doc.data().Disciplina,
                        Semestre: doc.data().Semestre,
                        Materia1: doc.data().Materia1,
                        Materia2: doc.data().Materia2,
                        Materia3: doc.data().Materia3,
                        Professor: doc.data().Professor,
                    })
                })
                setCurso(lista);
            }).catch((e)=>{
                return(
                    <div>
                        <h1>Erro ao solicitar lista</h1>
                    </div>
                )
            })
        }
        GetDataDisciplinas();
    },[])

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
                <Titles>Home</Titles>
                <Separator style={{marginTop: '-2%'}}></Separator>
                <CategorySection>
                        <CategoryContainer>
                            <CategoryContent >
                                <Link className={'NavigationLink'} to={'/alunoRegister'}>Estudantes</Link>
                            </CategoryContent>
                            <Students src={require('../Styles/img/studends.jpeg')} />
                        </CategoryContainer>

                    <CategoryContainer>
                        <CategoryContent>
                        <Link className={'NavigationLink'} to={'/professorRegister'}>Professores</Link>
                        </CategoryContent>
                        <Students src={require('../Styles/img/professor.jpg')} />
                    </CategoryContainer>

                    <CategoryContainer>
                        <CategoryContent href={'/cursoRegister'}>
                        <Link className={'NavigationLink'} to={'/cursoRegister'}>Cursos</Link>
                        </CategoryContent>
                        <Students src={require('../Styles/img/course.webp')} />
                    </CategoryContainer>
                </CategorySection>
            
                <Titles>Cursos</Titles>
                <Separator style={{marginTop: '-2%'}}></Separator>
            
                <CursoContainer>

                    {/* Map to retrieve all discipline data */}
                    
                    {curso.map((i)=>{

                        // Verification if the Semester is 1 or 2 (Dummy)
                        
                        if(i.Semestre === '1'){
                            return(
                            <Materia>
                                <MateriaLogo src={require('../Styles/img/materia.webp')} />
                                <TitleCurso>{i.Disciplina}</TitleCurso>
                                <Semestre><b>Semestre:</b> {i.Semestre}</Semestre>
                                <NomeMateria><b>Matéria:</b> {i.Materia1}</NomeMateria>
                                <NomeMateria><b>Matéria:</b> {i.Materia2}</NomeMateria>
                                <NomeMateria><b>Matéria:</b> {i.Materia3}</NomeMateria>
                                <NomeProfessor><b>Professor:</b> {i.Professor}</NomeProfessor>
                            </Materia>
                            )
                        }
                    })}

                    {/* Map to retrieve all discipline data */}

                    {curso.map((i)=>{

                        // Verification if the Semester is 1 or 2 (Dummy)
                        if(i.Semestre === '2'){
                            return(
                            <Materia>
                                <MateriaLogo src={require('../Styles/img/materia.webp')} />
                                <TitleCurso>{i.Disciplina}</TitleCurso>
                                <Semestre><b>Semestre:</b> {i.Semestre}</Semestre>
                                <NomeMateria><b>Matéria:</b> {i.Materia1}</NomeMateria>
                                <NomeMateria><b>Matéria:</b> {i.Materia2}</NomeMateria>
                                <NomeMateria><b>Matéria:</b> {i.Materia3}</NomeMateria>
                                <NomeProfessor><b>Professor:</b> {i.Professor}</NomeProfessor>
                            </Materia>
                            )
                        }
                    })}
                </CursoContainer>
            </ContentContainer>
        </MainContainerBlue>
    )
}

export default Dashboard;