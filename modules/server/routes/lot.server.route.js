const lotService = global.context.services['lotService'];

let init = (app) => {
    app.route('/lot')
        .get((req, res) => {
            lotService.getAllLots().then((lots) => {
                res.status(200).send(lots);
            });
        })
        .post((req, res) => {
            lotService.createLot(req.body).then((createdLot) => {
                res.status(200).send(createdLot);
            });
        });

    app.route('/lot/:id')
        .get((req, res) => {
            lotService.getLotById(req.params.id).then((lot) => {
                if(lot) {
                    res.status(200).send(lot);
                }else{
                    res.status(404).send('Not found');
                }
            });
        })
        .put((req, res) => {
            lotService.updateLot(req.params.id, req.body).then((lot) => {
                res.status(200).send(lot);
            });
        })
        .delete((req, res) => {
            lotService.deleteLot(req.params.id).then(() => {
                res.send('Deleted');
            });
        });
};



module.exports = init;