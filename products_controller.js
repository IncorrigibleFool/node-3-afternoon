module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        
        db.read_products().then(() => {
            res.sendStatus(200)
        }).catch(err =>{
            res.status(500).send(`That's just wrong...`) 
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        
        db.read_product([req.params.id]).then(() => {
            res.sendStatus(200)
        }).catch(err =>{
            res.status(500).send(`That's just wrong...`) 
            console.log(err)
        })
    },

    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        
        db.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(`That's just wrong...`) 
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        
        db.update_product([req.params.id, req.query.desc])
        .then(() => res.sendStatus(200))
        .catch(err =>{
            res.status(500).send(`That's just wrong...`) 
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        
        db.delete_product([req.params.id])
        .then(() => res.status(200)
        ).catch(err => {
            res.status(500).send(`That's just wrong...`) 
            console.log(err)
        })
    }
}