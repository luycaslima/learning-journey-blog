export type Categories = 'Talking' | 'Gamedev' | 'Webgl' | 'Opengl' | 'Computer Graphics' | 'Art'

export type Post = {
    title :string
    description : string
    slug: string
    date : string
    categories : Categories[]
    published : boolean
}