export type User = {
    email?: string,
    password?: string,
    avatar_url?: string,
    username?: string,
    user_id?: string,
    [key: string]: any
}

export type CurrentUser = {
    id: string,
    email: string,
    [key: string]: any
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

export type searchParams = {
    sort_by: string
    order: string
    limit: number
    p: number
}