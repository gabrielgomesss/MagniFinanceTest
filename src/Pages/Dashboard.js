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
                        <SidebarItem href={'/'}>Home</SidebarItem>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Group style={{ width: '20px', height: '100%'}} />
                        <SidebarItem href={'/alunoRegister'}>Alunos</SidebarItem>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <User style={{ width: '20px', height: '100%'}} />
                        <SidebarItem href={'/professorRegister'}>Professores</SidebarItem>
                    </SidebarItemContainer>

                    <SidebarItemContainer>
                        <Add style={{ width: '20px', height: '100%'}} />
                        <SidebarItem href={'/cursoRegister'}>Cadastrar Curso</SidebarItem>
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
                            <CategoryContent href={'/AlunoRegister'} >
                            <TitleCategory style={{zIndex: '1'}}>Estudantes</TitleCategory>
                            </CategoryContent>
                            <Students src={require('../Styles/img/studends.jpeg')} />
                        </CategoryContainer>

                    <CategoryContainer>
                        <CategoryContent href={'/ProfessorRegister'}>
                        <TitleCategory style={{zIndex: '1'}}>Professores</TitleCategory>
                        </CategoryContent>
                        <Students src={require('../Styles/img/professor.jpg')} />
                    </CategoryContainer>

                    <CategoryContainer>
                        <CategoryContent href={'/cursoRegister'}>
                        <TitleCategory  style={{zIndex: '1', marginLeft: '15%'}}>Cursos</TitleCategory>
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