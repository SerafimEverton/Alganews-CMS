import confirm from '../../Core/Utils/Confirm'
import info from '../../Core/Utils/Info'
import Logo from '../../app/components/Logo'
import NavBar from '../../app/components/NavBar'
import SessionController from '../../app/components/SessionController/SessionController'
import * as DL from './DefaultLayout.styles'

interface DefaultLayoutProps{
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps){
return <DL.Wrapper style={{ color: 'red'}}>

<DL.Header>
    <Logo />
</DL.Header>
<DL.Main>
    <DL.Navigation>
        <NavBar />
    </DL.Navigation>
    <DL.FeaturedContent>
        {props.children}
    </DL.FeaturedContent>
    <DL.Aside>
        <SessionController 
        name='Everton' 
        description='Iniciando na Programação' 
        onLogout={() => {
            confirm({
                title: 'Você quer deslogar?',
                onConfirm: () => {
                    info({
                      title: 'Você foi deslogado',
                      description: 'Você será redirecionado para a página de login'
                    })
                },
                onCancel: ()=> window.alert('Redirecionado')
            })
        }}
        />
    </DL.Aside>
</DL.Main>
</DL.Wrapper>
}

export default DefaultLayout