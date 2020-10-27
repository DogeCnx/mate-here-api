const Env = use("Env")

class NeedpostManage {

    constructor (NeedpostModel) {
      this._Needpost = NeedpostModel
    }

    _withReferences(instance, references) {
        if (references) {
          const extractedReferences = references.split(",")
          instance.with(extractedReferences)
        }

        return instance;
      }

      async getAll(references, page){
          const needposts= await this._Needpost.query().paginate(page,7)

          return needposts.toJSON()

      }
      async getById(needInstance,references){
          const { id } = needInstance.params
          const needposts= await this._Needpost.query().where({client_id : id}).fetch()

          return needposts.toJSON()
      }

      async create(needInstance,references) {

          const { needpost_id  } =  await this._Needpost.create(needInstance.body)

          const needposts= await this._Needpost.query().where({needpost_id  : needpost_id  }).fetch()

          return needposts.toJSON()
      }

      async deletById(needInstance){
          const { id  } = needInstance.params
          let needposts= await this._Needpost.findBy({needpost_id :id})

          if(!needposts){
              return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
          }
          needposts.delete()
          await needposts.save();

          return {status : ' Delete complete'};
      }

      async updateById(needInstance,references){
          const { id  } = needInstance.params
          let needposts= await this._Needpost.findBy({needpost_id :id})

          if(!needposts){
              return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
          }

          needposts.merge(needInstance.body)
          await needposts.save();

          needposts= this._Needpost.query().where({needpost_id :id})

          return this._withReferences(needposts,references).fetch().then(response => response.first())
      }


}

module.exports = NeedpostManage

