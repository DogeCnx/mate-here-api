
class RoomManage {
    
    constructor (RoomModel) {
      this._Room = RoomModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    getAll(references){
        const rooms= this._Room.query()
        
        
        return this._withReferences(rooms,references).fetch().then(response => response.first())
    }
    getById(roomInstance,references){
        const { id } = roomInstance.params
        const rooms= this._Room.query().where({room_id : id})
        
        
        return this._withReferences(rooms,references).fetch().then(response => response.first())
    }

    async create(roomInstance,references) {

        const {room_id} =  await this._Room.create(roomInstance.body)

        const rooms= this._Room.query().where({room_id : room_id})

        return this._withReferences(rooms,references).fetch().then(response => response.first())
    }
    
    async deletById(roomInstance){
        const { id } = roomInstance.params
        const rooms= await this._Room.find(id)

        if(!rooms){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        rooms.delete()
        await rooms.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(roomInstance,references){
        const { id } = roomInstance.params
        let rooms= await this._Room.find(id)

        if(!rooms){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        rooms.merge(roomInstance.body)
        await rooms.save();
    
        rooms= this._Room.query().where({room_id : id})
        
        return this._withReferences(rooms,references).fetch().then(response => response.first())
    }


}

module.exports = RoomManage