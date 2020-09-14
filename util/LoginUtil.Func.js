

module.exports =  async function LoginUtil(data,references,models) {

    
    const {username,password} = data.body
    //hash here

    const accounts = models.query().where({username : username,password:password})
    if (references) {
        const extractedReferences = references.split(",")
        accounts.with(extractedReferences)
    }
    if(!accounts){
        return {status : 200 ,error : `Not Found ${username}  Incorrect Username or Password` , data : undefined};
    }
    
    return {status : 200 ,error : undefined , data : {status : "complate", data : {username}}};


}