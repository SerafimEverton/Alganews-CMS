import Logo from '../../app/components/Logo'
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
        Navigation
    </DL.Navigation>
    <DL.FeaturedContent>
        Section
    </DL.FeaturedContent>
    <DL.Aside>
        <SessionController name='Everton' description='Iniciando na Programação' />
    </DL.Aside>
</DL.Main>

    todo: Layout
    {props.children}
</DL.Wrapper>
}

export default DefaultLayout