#Cookiess! Forum (UBv2)

This is a Reddit Mock, migrated from Ubiquitous Biscuit (React, React Router, Express, PSQL, Jest), built with Next 13, Typescript, Tailwind CSS, Supabase and Cypress.

[Live - deployed in Vercel](https://cookiess-forum.vercel.app/)

## Current features (User stories)
1. Users can sign up, with captcha protection, and will receive email to activate the account.
2. login via email or 2 types of social login (Github/Facebook) and view their own profile page
3. Both non authenticated users and authenticated users can read articles and comments without restrictions
4. Authenticated users can post new articles
5. Users who are the author of the article can edit/update the article (*)
6. Users who are the author of the article/comment can delete the article/comment
7. Users can create complex query to sort the list of articles, including comment count, article id, author name and created time.
8. Users can filter articles by topic.

## Tech stack
Next, Typescript, Supabase, Tailwind CSS, Cypress