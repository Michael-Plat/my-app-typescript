
export type UserType = {
    firstName: string
    lastName: string
    age: number
}

type PhotoType = {
    large: string
    email: string
}
// Generics
type ServerResponseTcype<D> = {
    errorCode: number
    message: Array<string>
    data: D
}

const response1: ServerResponseTcype<UserType> = {
    errorCode: 1,
    message: ['it', 'contacts'],
    data: {
        firstName: 'Ivan',
        lastName: 'Oblomov',
        age: 19
    }
}
const response2: ServerResponseTcype<PhotoType> = {
    errorCode: 1,
    message: ['it', 'contacts'],
    data: {
        large: "https://photo.ru/1.jpg",
        email: "https://photo.ru/2.jpg"
    }
}

type Nullable<T> = null | T // Generics

const initial = {
    age: 18,
    name: 'Ivan',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}

type StateType = typeof initial


// type ActionsTypes = AC1Type | AC2Type
// type AC1Type = ReturnType<typeof AC1>
// type AC2Type = ReturnType<typeof AC2>

type ActionsTypes = ReturnType<PropertiesType<typeof actions>>

const reduser = (state: StateType = initial, action: ActionsTypes) => {

    // state.photo = {
    //     large: '',
    //     email: ''
    // }

    switch (action.type) {
        case 'SET_AGE':
            return { ...state, age: action.age }
        case 'SET_NAMES':
            return { ...state, name: action.firstName + ' ' + action.lastName }
    }
    return state
}

// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const obj = {
    a: { name: 'Ivan' },
    b: { age: 22 },
    c: { site: { title: "https://photo.ru/1.jpg" } }
}

// type SomeType = typeof obj.a | typeof obj.b | typeof obj.c

// type SomeType<T> = T extends { [key: string]: infer U } ? U : never

// let Music: SomeType<typeof obj> = { age: 23 }

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

let Music: ReturnType<PropertiesType<typeof actions>>

const actions = {

    AC1: (age: number) => ({ type: 'SET_AGE', age } as const),
    // const action: AC1Type = {type: 'SET_AGE', age: 23}      // as const 

    AC2: (firstName: string, lastName: string) => ({ type: 'SET_NAMES', firstName, lastName } as const)
}

type Music<T> = T extends 'user' ? UserType :
    T extends 'photo' ? PhotoType : never

let a: Music<'user' | 'photo'> = {
    firstName: 'Ivan',
    lastName: 'Oblomov',
    age: 15
}

a = {
    large: "https://photo.ru/1.jpg",
    email: "https://photo.ru/2.jpg"
}

const b: Music<'photo'> = {
    large: "https://photo.ru/1.jpg",
    email: "https://photo.ru/2.jpg"
}
