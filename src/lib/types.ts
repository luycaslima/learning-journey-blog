export type Categories = 'Talking' | 'Gamedev' | 'Webgl' | 'Opengl' | 'Raylib' | 'Computer Graphics' | 'Art' | 'CSharp'

export type Heading = {
    level : number
    title : string
}

export type Post = {
    title :string
    description : string
    slug: string
    date : string
    categories : Categories[]
    published : boolean
    headings : Heading[]
}