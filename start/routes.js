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
  
  //teaacher table
  Route.resource('/accounts','AccountController'); //auto generate
  // Route.get('/accounts','AccountController.index')
  // Route.get('/accounts/:id','AccountController.show')
  // Route.post('/accounts' ,'AccountController.store')
  // Route.put('/accounts/:id','AccountController.update')
  // Route.patch('/accounts/:id','AccountController.update')
  // Route.delete('/accounts/:id','AccountController.destroy')
  
  //students table
  Route.resource('/clients', 'ClientController');

  //subjects 
  Route.resource('/haveposts', 'HavepostController');

  //group
  Route.resource('/needposts', 'NeedpostController');

  //enrollments
  Route.resource('/centrals', 'CentralController');
  
  //enrollments
  Route.resource('/rooms', 'RoomController');  

  //students table
  Route.resource('/registers','RegisterController');



}).prefix('api/v1')
