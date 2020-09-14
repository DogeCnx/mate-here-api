'use strict'

const { test } = use('Test/Suite')('Havepost Validator')
const needpostValidator = require('../../service/NeedpostTableValidator')

test('should receive object as first parameter', 
async ({ assert }) => {
  
  const validatedData = await needpostValidator({
    need_university_name :"" ,
        need_type : "Condo",
        need_full_cost : "3200" ,
        need_half_cost : "1000",
        need_amount_of_mate :"2" ,
        need_location : "near university.",
        need_faculty : "sdfsdfdsfsd",
        need_faculty_mate : "fineart",
        need_habit : "asdakjdklsajdlskajdlajdlasd asdaosdpiaidpasdk",
        need_habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        need_routine : "adsjklaj aslkdjlaksjdlaksjdkal",
        need_like_thing : "asdsadas",
        need_dislike : "pfdof",
        need_other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "No mate",
        client_id : "1",
        parking :  "have",
        lift : "have",
        keycard : "have",
        security : "have",
        pool : "have",
        gym : "have",
        luandry : "have",
        air_conditioner : "have",        
        number_of_toilet : "have",        
        number_of_bedroom : "have",        
        pets : "have",        
        smoking : "have",        
        internet_wifi : "have",        
        furniture : "have",        
        water_heater : "have" 

  })
  assert.isOk(validatedData.error)
})

test('should return only one error if single incorrect data is passed', 
async ({ assert }) => {
  
  const validatedData = await needpostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        need_type : "Condo",
        need_full_cost : "3200" ,
        need_half_cost : "1000",
        need_amount_of_mate :"2" ,
        need_location : "near university.",
        need_faculty : "sdfsdfdsfsd",
        need_faculty_mate : "fineart",
        need_habit : "asdakjdklsajdlskajdlajdlasd asdaosdpiaidpasdk",
        need_habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        need_routine : "aslkdkal",
        need_like_thing : "asdsadas",
        need_dislike : "pfdof",
        need_other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "No mate",
        client_id : "1",
        parking :  "over letters",
        lift : "have",
        keycard : "have",
        security : "have",
        pool : "have",
        gym : "have",
        luandry : "have",
        air_conditioner : "have",        
        number_of_toilet : "have",        
        number_of_bedroom : "have",        
        pets : "have",        
        smoking : "have",        
        internet_wifi : "have",        
        furniture : "have",        
        water_heater : "have" 

  })
  assert.equal(validatedData.error.length, 1)
})

test('should return more than one error if multiple incorrect data is passed', 
async ({ assert }) => {
  
  const validatedData = await needpostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        need_type : "Condo",
        need_full_cost : "3200" ,
        need_half_cost : "1000",
        need_amount_of_mate :"wrong number" ,
        need_location : "near university.",
        need_faculty : "sdfsdfdsfsd",
        need_faculty_mate : "fineart",
        need_habit : "asdakjdklsajdlskajdlajdlasd asdaosdpiaidpasdk",
        need_habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        need_routine : "ajdkal",
        need_like_thing : "asdsadas",
        need_dislike : "pfdof",
        need_other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "No mate",
        client_id : "1",
        parking :  "have",
        lift : "have",
        keycard : "over letters",
        security : "have",
        pool : "have",
        gym : "have",
        luandry : "have",
        air_conditioner : "have",        
        number_of_toilet : "have",        
        number_of_bedroom : "have",        
        pets : "have",        
        smoking : "have",        
        internet_wifi : "have",        
        furniture : "have",        
        water_heater : "have" 
  })
  assert.isAbove(validatedData.error.length, 1)
})

test('should return undefined when pass correct data', 
async ({ assert }) => {
  
  const validatedData = await needpostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        need_type : "Condo",
        need_full_cost : "3200" ,
        need_half_cost : "1000",
        need_amount_of_mate :"2" ,
        need_location : "near university.",
        need_faculty : "sdfsdfdsfsd",
        need_faculty_mate : "fineart",
        need_habit : "asdakjdklsajdlskajdlajdlasd asdaosdpiaidpasdk",
        need_habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        need_routine : "sjdlaksjdkal",
        need_like_thing : "asdsadas",
        need_dislike : "pfdof",
        need_other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "No mate",
        client_id : "1",
        parking :  "have",
        lift : "have",
        keycard : "have",
        security : "have",
        pool : "have",
        gym : "have",
        luandry : "have",
        air_conditioner : "have",        
        number_of_toilet : "have",        
        number_of_bedroom : "have",        
        pets : "have",        
        smoking : "have",        
        internet_wifi : "have",        
        furniture : "have",        
        water_heater : "have" 

  })
  assert.equal(validatedData.error, undefined)
})