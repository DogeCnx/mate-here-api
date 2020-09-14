

module.exports =  async function LoginUtil(data,references,account,client) {

    
    const {username,password} = data.body
    //hash here

    const accounts = await account.findBy({username : username,password:password})
    if (references) {
        const extractedReferences = references.split(",")
        accounts.with(extractedReferences).fetch().then(response => response.first())
    }
    
    if(!accounts){
        return {status : 200 ,error : `Not Found ${username}  Incorrect Username or Password` , data : undefined};
    }
    const clients = await  client.query().where({account_id : accounts.account_id}).fetch()
    if (references) {
        const extractedReferences = references.split(",")
        clients.with(extractedReferences).fetch().then(response => response.first())
    }

    return {status : 200 ,error : undefined , data : clients };


}