export type User = {
    email?: string,
    password?: string,
    [key:string]: any
}

export type Article = {
    article_id?: number,
    body: string,
    topic: string,
    title: string,
    author: string,
    created_at: string,
    article_img_url: string,
    votes: number,
    comment_count: number
}

export type Comment = {
    comment_id: number,
    body: string,
    article_id: number,
    author: string,
    votes: number,
    updated_at: string
}

export type Topic = {
    slug: string,
    description: string
}