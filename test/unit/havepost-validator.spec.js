'use strict'

const { test } = use('Test/Suite')('Havepost Validator')
const havepostValidator = require('../../service/HavepostTableValidator')

test('should receive object as first parameter', 
async ({ assert }) => {
  
  const validatedData = await havepostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        type_room : "Condo",
        full_cost : "3200" ,
        half_cost : "1000",
        amount_of_mate :"2" ,
        location : "near university.",
        faculty : "sdfsdfdsfsd",
        faculty_mate : "fineart",
        habit : "asdakjdklsajdlskajdlajdlasd asdaosdpiaidpasdk",
        habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        like_thing : "asdsadas",
        dislike : "pfdof",
        other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
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
  assert.isNotOk(validatedData.error)
})

test('should return only one error if single incorrect data is passed', 
async ({ assert }) => {
  
  const validatedData = await havepostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        type_room : "Condo",
        full_cost : "3200" ,
        half_cost : "1000",
        amount_of_mate :"2" ,
        location : "near university.",
        faculty : "sdfsdfdsfsd",
        faculty_mate : "fineart",
        habit : "sdffdsf",
        habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        like_thing : "asdsadas",
        dislike : "pfdof",
        other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "Nomate",
        client_id : "1",
        parking :  "over letter",
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
  
  const validatedData = await havepostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        type_room : "Condo",
        full_cost : "3200" ,
        half_cost : "1000",
        amount_of_mate :"wrong number" ,
        location : "near university.",
        faculty : "sdfsdfdsfsd",
        faculty_mate : "fineart",
        habit : "sdffdsf",
        habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        like_thing : "asdsadas",
        dislike : "pfdof",
        other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "Nomate",
        client_id : "1",
        parking :  "over letter",
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
  assert.isAbove(validatedData.error.length, 1)
})

test('should return undefined when pass correct data', 
async ({ assert }) => {
  
  const validatedData = await havepostValidator({
    need_university_name :"dsffsdfdfsdfs" ,
        type_room : "Condo",
        full_cost : "3200" ,
        half_cost : "1000",
        amount_of_mate :"2" ,
        location : "near university.",
        faculty : "sdfsdfdsfsd",
        faculty_mate : "fineart",
        habit : "sdffdsf",
        habit_mate : "adsjklasdjlkasdj aslkdjlaksjdlaksjdkal",
        like_thing : "asdsadas",
        dislike : "pfdof",
        other_information : "sajdhjkashdkjasd asjhdkajshdkjsahdka",
        status_post : "Nomate",
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