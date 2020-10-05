export interface Post {
    id: string
    date: string
    link: string
    title: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }
}
export type Posts = Post[]
