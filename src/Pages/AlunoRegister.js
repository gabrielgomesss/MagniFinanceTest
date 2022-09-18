// All needed imports 

import { useState, useEffect } from 'react'
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@firebase/firestore';
import { db } from '../FirestoreConnection'
import { ContentContainer, MainContainerBlue, ButtonContainer } from '../Styles/Containers';
import { InfoAluno, Subtitles, Titles, TitlesWhite } from '../Styles/Titles & Subtitles';
import { FormContainer, Labels, SectionForm, SectionItem, ToggleFormContainer } from '../Styles/Forms';
import { Inputs } from '../Styles/inputs';
import { LogoProfile, SideBar, SidebarItem, SideBarTitle, SidebarProfile, SidebarItemContainer, SidebarSelection, Separator, Separator2, SeparatorWhite } from '../Styles/SideBar';
import { Table, TableContent, TableItem} from '../Styles/Table'
import {ReactComponent as Home} from '../Styles/img/home.svg';
import {ReactComponent as Group} from '../Styles/img/users-alt.svg';
import {ReactComponent as User} from '../Styles/img/user.svg';
import {ReactComponent as Add} from '../Styles/img/add.svg';
import {ReactComponent as Delete} from '../Styles/img/trash.svg';
import {ReactComponent as Edit} from '../Styles/img/pencil.svg';
import '../App.css';
import { SendBTN, ToggleSendBTN } from '../Styles/Buttons';
import { ToggleForm } from '../Styles/Toggle';

// 

function AlunoRegister(){
    const [aluno, setAluno] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dof, setDof] = useState('');
    const [nota,setNota] = useState('')
    const [alunos, setAlunos] = useState([])
    const [toggle, setToggle] = useState(false);
    const Toggle = () =>setToggle(!toggle);

    useEffect(()=>{
        function getData(){
            const DbRef = collection(db, 'Alunos');
            getDocs(DbRef).then((value)=>{
                let Lista = [];
                value.forEach((doc)=>{
                    Lista.push({
                        id: doc.id,
                        Name: doc.data().Name,
                        Surname: doc.data().Surname,
                        Nota: doc.data().Nota,
                        DateOfBirth: doc.data().DateOfBirth,
                    })
                })
                setAlunos(Lista);
                
                console.log(Lista);
            }).catch((e)=>{
                return(
                    <div><h1>Erro ao solicitar alunos</h1></div>
                )
            })
        }
        getData();
    },[])


    // Function that creates a student

    function RegistrarAluno(){
        const Dbref = doc(collection(db, 'Alunos'));
        let data = setDoc(Dbref,{
            Name: name, 
            Surname: surname,
            DateOfBirth: dof,
            Nota: nota,
        }).then((value)=>{
            alert('Aluno cadastrado')
            setAluno(value)
            console.log(name, surname, dof, nota)
        }).catch((e)=>{
            alert('Erro ao cadastrar aluno')
            console.log(e)
        })
    }

    // Trigger to create students
    function HandleSubmit(e){
        e.preventDefault()
        RegistrarAluno(name, surname, dof, nota)
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
                <Titles>Alunos</Titles>
                <Separator2></Separator2>
                <FormContainer onSubmit={HandleSubmit}>
                    <TitlesWhite>Adicionar Aluno</TitlesWhite>
                    <SeparatorWhite></SeparatorWhite>
                    <SectionForm>
                        <SectionItem>
                            <Labels>Nome</Labels>
                            <Inputs onChange={(e)=>setName(e.target.value)} />
                        </SectionItem>
                        <SectionItem>
                            <Labels>Sobrenome</Labels>
                            <Inputs onChange={(e)=>setSurname(e.target.value)} />
                        </SectionItem>
                 </SectionForm>

                <SectionForm>
                    <SectionItem>
                        <Labels>Data de nascimento</Labels>
                        <Inputs
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        type='text' onChange={(e)=>setDof(e.target.value)} />
                    </SectionItem>
                    <SectionItem>
                        <Labels>Nota</Labels>
                        <Inputs type='number' max={10} onChange={(e)=>setNota(e.target.value)} />
                    </SectionItem>
                </SectionForm>
                <SendBTN type="submit">Enviar</SendBTN>
            </FormContainer>

            <Titles>
                Alunos Cadastrados
            </Titles>
            <Separator2 />

            {/*  Map to retrieve all students data */}

            {alunos.map((i)=>{         
                
                // Function to update student
                function UpdateAluno(){
                    const Dbref = doc(db, "Alunos", i.id);

                    // Verification section to update students
                    if(!!name){
                    updateDoc(Dbref,{
                            Name: name,
                        }).then(()=>{
                            alert('Nome do aluno atualizado com sucesso!')
                        }).catch((e)=>{
                            alert('Erro ao atualizar nome do aluno')
                        })
                    }


                    if(!!surname){
                        updateDoc(Dbref,{
                            Surname: surname,
                        }).then(()=>{
                            alert('Sobrenome do aluno atualizado com sucesso!')
                        }).catch((e)=>{
                            alert('Erro ao atualizar sobrenome do aluno')
                        })
                    }
                    if(!!nota){
                        updateDoc(Dbref,{
                            Nota: nota,
                        }).then(()=>{
                            alert('Nota do aluno atualizada com sucesso!')
                        }).catch((e)=>{
                            alert('Erro ao atualizar nota do aluno')
                        })
                    }

                    if(!!dof){
                        updateDoc(Dbref, {
                            DateOfBirth: dof,
                        }).then(()=>{
                            alert('Data de nascimento atualizada com sucesso!')
                        }).catch((e)=>{
                            alert('Erro ao atualizar data de nascimento')
                        })
                    }
                }

                // Update trigger
                function HandleUpdate(e){
                    e.preventDefault();
                    UpdateAluno(name, surname, nota, dof)
                }

                // Function to delete student
                function deleteAluno(){
                    deleteDoc(doc(db,'Alunos', i.id)).then(()=>{
                        alert('Aluno deletado com sucesso')
                    }).catch((e)=>{
                        console.log(e)
                    })
                }

                return(

                    // Section with students information such as Name, surname, date of birth, and ID

                    <Table key={i.id}>
                        <TableContent>
                            <TableItem>
                                <Subtitles>
                                    Nome:
                                </Subtitles>
                                <InfoAluno> {i.Name + ' ' + i.Surname}</InfoAluno>
                            </TableItem>
                            <TableItem>
                                <Subtitles>Nota: </Subtitles>
                                <InfoAluno style={{marginLeft: '5%'}}>{i.Nota}</InfoAluno>
                            </TableItem>
                            <TableItem>
                                <Subtitles>Data de nascimento: </Subtitles>
                                <InfoAluno>{i.DateOfBirth}</InfoAluno>
                            </TableItem>
                            <TableItem>
                                <Subtitles>Id de matricula:</Subtitles>
                                <InfoAluno>{i.id}</InfoAluno>
                            </TableItem>

                            <ButtonContainer>
                                <Delete title={'Deletar Usuário'} style={{width: '30%'}} onClick={deleteAluno}>Deletar usuário </Delete>
                                <Edit href={'/alunoUpdate'}  title={'Editar usuário'} onClick={Toggle} style={{width: '30%'}}>Atualizar Usuário</Edit>
                            </ButtonContainer>
                        </TableContent>

                        {/* Toggle to open a form to update student */}

                        {toggle &&(
                            <ToggleForm key={i.id}>
                                <Titles style={{marginLeft: '5%'}}>Atualizar aluno</Titles>
                                <Separator2 style={{width: '95%'}}></Separator2>
                                <ToggleFormContainer>
                                    <SectionForm>
                                        <SectionItem>
                                            <Labels>Nome</Labels>
                                            <Inputs onChange={(e)=>setName(e.target.value)} />
                                            <Labels style={{marginTop: '3.5%'}}>Sobrenome</Labels>
                                            <Inputs onChange={(e)=>setSurname(e.target.value)} />
                                        </SectionItem>
                                    </SectionForm>
                                <SectionForm>
                                    <SectionItem>
                                        <Labels>Data de nascimento</Labels>
                                        <Inputs onFocus={(e) => (e.target.type = "date")}
                                                onBlur={(e) => (e.target.type = "text")}
                                                type='date' onChange={(e)=>setDof(e.target.value)} />
                                        <Labels style={{marginTop: '3.5%'}}>Nota</Labels>
                                        <Inputs type='number' max={10} placeholder={'Nota'} onChange={(e)=>setNota(e.target.value)} />
                                    </SectionItem>
                                </SectionForm>
                                <ToggleSendBTN onClick={HandleUpdate}>Atualizar</ToggleSendBTN>
                            </ToggleFormContainer>
                        </ToggleForm>
                        )}  
                    </Table>   
                )
            }
            )}
            </ContentContainer>
        </MainContainerBlue>
    )
}
export default AlunoRegister;