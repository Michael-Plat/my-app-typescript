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

const intial = {
    age: 18,
    name: 'Ivan',
    photo: null
}

const reduser = (state = intial, action: any) => {
    return state
}







