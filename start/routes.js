'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  //picture
  Route.get("/assets/:fileName","AsseetController.show")
  Route.post("/assets","AsseetController.upload")
  //accounts
  Route.post('/auth/login', 'AuthController.login')
  Route.post('/auth/login', 'AuthController.logout')

  //clients
  // Route.resource('/clients', 'ClientController').middleware(new Map([[[ 'store' ],['auth']],[['update'],['auth']]]));
  Route.get('/clients/:id', 'ClientController.show')
  Route.get('/clients', 'ClientController.index')
  Route.post('/clients', 'ClientController.store').middleware('auth')
  Route.put('/clients', 'ClientController.update').middleware('auth')
  Route.patch('/clients', 'ClientController.update').middleware('auth')
  Route.delete('/clients', 'ClientController.delete').middleware('auth')
  //haveposts
  // Route.resource('/haveposts', 'HavepostController');
  Route.get('/haveposts/:id', 'HavepostController.show')
  Route.get('/haveposts', 'HavepostController.index')
  Route.post('/haveposts', 'HavepostController.store').middleware('auth')
  Route.put('/haveposts', 'HavepostController.update').middleware('auth')
  Route.patch('/haveposts', 'HavepostController.update').middleware('auth')
  Route.delete('/haveposts', 'HavepostController.delete').middleware('auth')

  //needposts
  // Route.resource('/needposts', 'NeedpostController');
  Route.get('/needposts/:id', 'NeedpostController.show')
  Route.get('/needposts', 'NeedpostController.index')
  Route.post('/needposts', 'NeedpostController.store').middleware('auth')
  Route.put('/needposts', 'NeedpostController.update').middleware('auth')
  Route.patch('/needposts', 'NeedpostController.update').middleware('auth')
  Route.delete('/needposts', 'NeedpostController.delete').middleware('auth')


  //registers
  Route.resource('/registers','RegisterController');



}).prefix('api/v1')
