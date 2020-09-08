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
  
  // //teaacher table
  // Route.resource('/accounts','AccountController'); //auto generate
  
  // //students table
  // Route.resource('/clients', 'ClientController');

  // //subjects 
  // Route.resource('/haveposts', 'HavepostController');

  // //group
  // Route.resource('/needposts', 'NeedpostController');

  // //enrollments
  // Route.resource('/centrals', 'CentralController');
  
  // //enrollments
  // Route.resource('/rooms', 'RoomController');  



}).prefix('api/v1')
