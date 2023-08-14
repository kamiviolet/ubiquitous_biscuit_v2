export type User = {
    email?: string,
    password?: string,
    [key:string]: any
}

export type Article = {
    article_id: number,
    article_img_url: string | null,
    author: string,
    author_id: string | null,
    body: string,
    created_at: string,
    title: string,
    topic: string,
    votes: number,
    comments: any,
}

export type Comment = {
    article_id: number | null,
    author: string | null,
    body: string,
    comment_id: number,
    updated_at: string,
    votes: number
}

export type Topic = {
    slug: string,
    description: string
}