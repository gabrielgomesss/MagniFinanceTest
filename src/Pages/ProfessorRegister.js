import { useState, useEffect } from 'react'
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../FirestoreConnection';
import { ContentContainer, MainContainerBlue, ButtonContainer } from '../Styles/Containers';
import { InfoAluno, Subtitles, Titles, TitlesWhite } from '../Styles/Titles & Subtitles';
import { FormContainer, Labels, SectionForm, SectionItem, ToggleFormContainer } from '../Styles/Forms';
import { Inputs, Inputs100 } from '../Styles/inputs';
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

function ProfessorRegister(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [salario, setSalario] = useState('');
    const [dof, setDof] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [materiaMinistrada, setMateriaMinistrada] = useState('')
    const [professor, setProfessor] = useState([]);
    const [toggle, setToggle] = useState(false);

    const Toggle = () =>setToggle(!toggle)

    useEffect(()=>{

        //  Function that retrieves all professors data

        function getData(){
            const DbRef = collection(db, 'Professores');
            getDocs(DbRef).then((value)=>{
                let lista = []
                value.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        Name: doc.data().Name,
                        Surname: doc.data().surname,
                        Salario: doc.data().Salario,
                        MateriaMinistrada: doc.data().MateriaMinistrada,
                        DateOfBirth: doc.data().DateOfBirth,
                        Periodo: doc.data().Periodo

                    })
                })
                setProfessor(lista);
                console.log(lista);
            })
        }
        getData();
    },[])

    // Function to register a new professor

    function RegistrarProfessor(){
        const DbRef = doc(collection(db,'Professores'));
        let data = setDoc(DbRef,{
            Name: name, 
            Surname: surname,
            Salario: salario,
            DateOfBirth: dof,
            MateriaMinistrada: materiaMinistrada,
            Periodo: periodo
        }).then(()=>{
            alert('Professor cadastrado com sucesso')
        }).catch((e)=>{
            alert('Erro ao cadastrar professor')
        })
    }


    // Trigger to register a new professor
    function HandleRegister(e){
        e.preventDefault();
        RegistrarProfessor(name,surname,salario, dof, materiaMinistrada, periodo)
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
                <Titles>Professores</Titles>
                <Separator style={{marginTop: '-1%'}}></Separator>
                <FormContainer onSubmit={HandleRegister}>
                    <TitlesWhite>Adicionar Professores</TitlesWhite>
                    <SeparatorWhite></SeparatorWhite>
                        <SectionForm>
                            <SectionItem>
                                <Labels>Nome</Labels>
                                <Inputs type='text' placeholder={'name'} onChange={(e)=>setName(e.target.value)} />
                            </SectionItem>

                            <SectionItem>
                                <Labels>Sobrenome</Labels>
                                <Inputs type='text' placeholder={'Surname'} onChange={(e)=>setSurname(e.target.value)}/>
                            </SectionItem>
                        </SectionForm>

                    <SectionForm>
                        <SectionItem>
                            <Labels>Salario</Labels>
                            <Inputs type='text' placeholder={'Salario'} onChange={(e)=>setSalario(e.target.value)} />
                            <Labels style={{marginTop: '3.5%'}}>Data de nascimento</Labels>
                            <Inputs type='Date' onChange={(e)=>setDof(e.target.value)} />
                        </SectionItem>

                        <SectionItem>
                            <Labels>Matéria do professor</Labels>
                            <Inputs type='text' placeholder={'Materia do professor'} onChange={(e)=>setMateriaMinistrada(e.target.value)} />
                            <Labels style={{marginTop: '3.5%'}}>Periodo</Labels>
                            <Inputs type='text' onChange={(e)=>setPeriodo(e.target.value)} />
                        </SectionItem>
                    </SectionForm>
                    <SendBTN type='submit'>Enviar</SendBTN>
                </FormContainer>

                <Titles>
                    Professores Cadastrados
                </Titles>
                <Separator2 />

            {/* Map function to retrieve all professors data */}
            {professor.map((i)=>{

                //  Function to delete a professor
                function DeleteProfessor(){
                    deleteDoc(doc(db, 'Professores', i.id)).then(()=>{
                        alert('Professor deletado com sucesso')
                    }).catch((e)=>{
                        alert('Erro ao deletar professor')
                        console.log(e)
                    })
                }

                // Function that update Professores data
                function ProfessorUpdate(){
                    const Dbref = doc(db, 'Professores', i.id)

                    // Verification section to update a professors data
                    if(!!name){
                        updateDoc(Dbref,{
                            Name: name,
                        }).then(()=>{
                            alert('Nome do professor atualizado com sucesso')
                        }).catch((e)=>{
                            alert('Erro ao atualizar nome')
                        })
                    }

                    if(!!surname){
                        updateDoc(Dbref, {
                            Surname: surname,
                        }).then(()=>{
                            alert('Sobrenome atualizado com sucesso')
                        })
                    }

                    if(!!salario){
                        updateDoc(Dbref,{
                            Salario: salario,
                        }).then(()=>{
                            alert('Salario atualizado com sucesso')
                        }).catch((e)=>{
                            alert('Erro ao atualizar salário')
                        })
                    }

                    if(!!dof){
                        updateDoc(Dbref,{
                            DateOfBirth: dof,
                        }).then(()=>{
                            alert('Aniversário atualizado com sucesso')
                        }).catch((e)=>{
                            alert('Erro ao atualizar aniversário')
                        })
                    }
                    if(!!periodo){
                        updateDoc(Dbref,{
                            Periodo: periodo,
                        }).then(()=>{
                            alert('Periodo atualizado com sucesso')
                        }).catch((e)=>{
                            alert('Erro ao atualizar periodo')
                        })
                    }
                }

                // Update trigger.
                function HandleUpdate(e){
                    e.preventDefault();
                    ProfessorUpdate(name, surname, salario, dof, periodo)
                }
                return(
                    // Section with professors information such as Name, salary, date of birth, and ID
                    <Table key={i.id}>
                        <TableContent>
                                <TableItem>
                                    <Subtitles>
                                        Nome Professor:
                                    </Subtitles>
                                <InfoAluno>{i.Name}</InfoAluno>
                            </TableItem>

                            <TableItem>
                                <Subtitles>Salario:</Subtitles>
                                <InfoAluno>{'R$' + ' ' + i.Salario}</InfoAluno>
                            </TableItem>

                            <TableItem>
                                <Subtitles>Id do professor:</Subtitles>
                                <InfoAluno>{i.id}</InfoAluno>
                            </TableItem>

                            <TableItem>
                                <Subtitles>
                                    Data de nascimento
                                </Subtitles>
                                <InfoAluno>{i.DateOfBirth}</InfoAluno>
                            </TableItem>
                            
                            <ButtonContainer>
                                <Delete title={'Deletar Professor'} style={{width: '30%', }} onClick={DeleteProfessor}>Deletar</Delete>
                                <Edit  title={'Editar Professor'} style={{width: '30%', }} onClick={Toggle}> Atualizar Professor/</Edit>
                            </ButtonContainer>
                        </TableContent>

                        {/* Toggle section to update professor */}
                            {toggle && (
                                <ToggleForm key={i.id}>
                                    <Titles style={{marginLeft: '5%'}}>Atualizar Professor</Titles>
                                    <Separator2 style={{width:'95%'}}></Separator2>
                                    <ToggleFormContainer>
                                        <SectionForm>
                                            <SectionItem>
                                                <Labels>Nome</Labels>
                                                <Inputs100 type='text' placeholder={'name'} onChange={(e)=>setName(e.target.value)} />
                                                <Labels style={{marginTop: '3.5%'}}>Sobrenome</Labels>
                                                 <Inputs100 type='text' placeholder={'Surname'} onChange={(e)=>setSurname(e.target.value)}/>
                                             </SectionItem>
                                        </SectionForm>

                                    <SectionForm>
                                        <SectionItem>
                                            <Labels>Salario</Labels>
                                            <Inputs100 type='text' placeholder={'Salario'} onChange={(e)=>setSalario(e.target.value)} />
                                            <Labels style={{marginTop: '3.5%'}}>Matéria ministrada</Labels>
                                            <Inputs100 type='text' placeholder={'MateriaMinistrada'} onChange={(e)=>setMateriaMinistrada(e.target.value)} />
                                        </SectionItem>
                                    </SectionForm>

                                    <SectionForm>
                                        <SectionItem>
                                            <Labels>Data de nascimento</Labels>
                                            <Inputs100 type='date' onChange={(e)=>setDof(e.target.value)}/>
                                            <Labels style={{marginTop: '3.5%'}}>Periodo</Labels>
                                            <Inputs100 type='text' onChange={(e)=>setPeriodo(e.target.value)} />
                                        </SectionItem>
                                    </SectionForm>
                                        <ToggleSendBTN style={{marginLeft: '3.5%'}} onClick={HandleUpdate}>Enviar</ToggleSendBTN>
                                    </ToggleFormContainer>
                                </ToggleForm>
                            )}
                    </Table>
                )
            })}
            </ContentContainer>
        </MainContainerBlue>
    )
}

export default ProfessorRegister;
