'use strict'

const Env = use("Env")

const Helpers = use("Helpers")

class AssetController {

  show({request,response}){
    const {fileName} = request.params
    return response.download(Helpers.tmpPath(`upload/${fileName}`))

  }

  async upload({request }){
    const file = request.file("image",{
      type : ["image"],
      size : "2mb"
    })

    const fileName = `${new Date().getTime()}.jpg`
    await file.move(Helpers.tmpPath("upload"),{
      name : fileName
    })
    if(!file.moved()) throw new Error();

    return {status : 200 ,data : { path : `http://${Env.get('HOST')}:${Env.get('PORT')}/api/v1/assets/${fileName}`}}

  }

}
module.exports = AssetController
