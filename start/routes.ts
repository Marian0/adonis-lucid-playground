/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Category from 'App/Models/Category'
import Post from 'App/Models/Post'

Route.get('/create', async () => {
  const cat1 = await Category.create({
    name: 'Cat1',
  })

  const cat2 = await Category.create({
    name: 'Cat2',
  })

  await Post.create({
    title: 'post 1',
    category_id: cat1.id,
  })

  await Post.create({
    title: 'post 2',
  })

  await Post.create({
    title: 'post 3',
    category_id: cat2.id,
  })
})

Route.get('/get', async () => {
  const posts = await Post.query().where('title', '=', 'post 2').preload('category')

  return posts
})
