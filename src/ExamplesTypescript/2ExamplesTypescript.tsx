import { compose } from "redux";
import React, { ComponentType, FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

type Todo = {
    title: string
    description: string
    compeleted: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
    title: 'Clean room',
    compeleted: false
}

function A<T extends { name: string }>(entity: T) {
    console.log(entity.name)
}

type WthNameType = { name: string }

A({ name: 'errer', age: 23 })
A({ name: 'errer', title: 23 })




function MusicHOC<WP extends { music: number }>(WrapperdComponent: ComponentType<WP>) {
    const ContainerComponent: FC<Omit<WP, 'music'>> = (props) => {
        return <div><WrapperdComponent {...props as WP} music={34} /></div>
    }
    return ContainerComponent
}
function DanceHOC<WP extends { dace: number }>(WrapperdComponent: ComponentType<WP>) {
    const ContainerComponent: FC<Omit<WP, 'dace'>> = (props) => {
        return <div><WrapperdComponent {...props as WP} dace={34} /></div>
    }
    return ContainerComponent
}

type C1PropsType = {
    title: string
    music: number
}

type MapPropsType = {
    dace: string
}

type C1ParamsType = {
    userId: string
}

const C1: FC<C1PropsType & MapPropsType & RouteComponentProps<C1ParamsType>> = (props) => {
    console.log(props.match.params.userId)
    return <div>{props.title}</div>
}
/*
const C1Container = MusicHOC(C1)
const C1Container2 = DanceHOC(C1Container)
*/

type FromMusicHOCPropsType = Omit<C1PropsType, 'music'>
type FromMusicHOCType = ComponentType<FromMusicHOCPropsType>
type FromDanceHOCType = ComponentType<Omit<FromMusicHOCPropsType, 'dace'>>

// const SyperHOC = compose<FromMusicHOCType, // A
//     ComponentType<C1PropsType>, // T1
//     FromDanceHOCType>( // R
//         DanceHOC,
//         MusicHOC
//     )

// const C1Container2 = SyperHOC(C1)

// const App2 = () => {
//     return <>
//         <C1Container2 title={'Ivan'} />
//     </>
// }

const mstp = (state: any) => {
    return {
        dace: 14
    }
}

// const C1_1connect = connect(mstp)(C1)
// const ConnectdWithRouterC1_ = withRouter(C1_1connect)

const ConnectdWithRouterC1 = compose<ComponentType<Omit<C1PropsType, 'music'>>>(
    withRouter,
    connect(mstp),
    MusicHOC
)(C1)

const App = () => {
    return <>
        <ConnectdWithRouterC1 title={'TypeScript'} />
    </>
}


/*const f1 = (a: number) => 'sda'
const f2 = (a: string) => 100

let result = compose(
    f2,
    f1)(18)

// result = 'ssff'
result = 12*/