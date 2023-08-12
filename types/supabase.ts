export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          article_id: number
          article_img_url: string | null
          author: string
          author_id: string | null
          body: string
          created_at: string
          title: string
          topic: string
          votes: number
        }
        Insert: {
          article_id?: number
          article_img_url?: string | null
          author: string
          author_id?: string | null
          body: string
          created_at?: string
          title: string
          topic: string
          votes?: number
        }
        Update: {
          article_id?: number
          article_img_url?: string | null
          author?: string
          author_id?: string | null
          body?: string
          created_at?: string
          title?: string
          topic?: string
          votes?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["username"]
          },
          {
            foreignKeyName: "articles_topic_fkey"
            columns: ["topic"]
            referencedRelation: "topics"
            referencedColumns: ["slug"]
          }
        ]
      }
      comments: {
        Row: {
          article_id: number | null
          author: string | null
          body: string
          comment_id: number
          updated_at: string
          votes: number
        }
        Insert: {
          article_id?: number | null
          author?: string | null
          body: string
          comment_id?: number
          updated_at?: string
          votes?: number
        }
        Update: {
          article_id?: number | null
          author?: string | null
          body?: string
          comment_id?: number
          updated_at?: string
          votes?: number
        }
        Relationships: [
          {
            foreignKeyName: "comments_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "articles"
            referencedColumns: ["article_id"]
          },
          {
            foreignKeyName: "comments_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["username"]
          }
        ]
      }
      topics: {
        Row: {
          description: string | null
          slug: string
        }
        Insert: {
          description?: string | null
          slug: string
        }
        Update: {
          description?: string | null
          slug?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          name: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          name: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          name?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}