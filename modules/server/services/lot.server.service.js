const lot = global.context.models['lot'];

class LotService {
     constructor(db){
         this.db = db;
     }

    getAllLots(){
        return this.db.models.lots.findAll();
    };

    createLot (item) {
        return this.db.models.lots.create(item);
    };

    getLotById (id) {
        return this.db.models.lots.findOne({where: {id: id}});
    };

    updateLot (id, lotToUpdate) {
        return this.getLotById(id).then((lot) => {
            if(lot){
                return lot.update(lotToUpdate);
            }
        })
    };

    deleteLot (id) {
        return this.db.models.lots.destroy({where: {id: id}});
    };
};

module.exports = {  name: 'lotService',
                    init: new LotService(global.context.db)};