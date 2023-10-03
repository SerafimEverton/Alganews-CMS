import { LoadingWrapper } from "./Loading.style";

interface LoadingProps{
    show?: boolean
}

export default function Loading(props: LoadingProps){

if(!props.show){
return null
}

return <LoadingWrapper>

<div className="lds-grid" >

    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    </div>

</LoadingWrapper>
}