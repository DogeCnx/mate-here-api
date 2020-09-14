
class HavepostManage {
    
    constructor (HavepostModel) {
      this._Havepost = HavepostModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    async getAll(references){
        const haveposts= await this._Havepost.query().fetch()
        
        return haveposts

    }
    async getById(havepostInstance,references){
        const { id } = havepostInstance.params
        const haveposts= await this._Havepost.query().where({client_id : id}).fetch()
        
        return haveposts
    }

    async create(havepostInstance,references) {

        const { havepost_id  } =  await this._Havepost.create(havepostInstance.body)

        const haveposts= await this._Havepost.query().where({havepost_id  : havepost_id  }).fetch()
        
        return haveposts
    }
    
    async deletById(havepostInstance){
        const { id  } = havepostInstance.params
        let haveposts= await this._Havepost.findBy({havepost_id :id})

        if(!haveposts){
            return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
        }
        haveposts.delete()
        await haveposts.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(havepostInstance,references){
        const { id  } = havepostInstance.params
        let haveposts= await this._Havepost.findBy({havepost_id :id})

        if(!haveposts){
            return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
        }

        haveposts.merge(havepostInstance.body)
        await haveposts.save();
    
        haveposts= this._Havepost.query().where({havepost_id :id})
        
        return this._withReferences(haveposts,references).fetch().then(response => response.first())
    }


}

module.exports = HavepostManage