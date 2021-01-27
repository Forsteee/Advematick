const express = require('express');
const app = express();
const port = 3001;
const init_models = require('./models/init-models');
const sequelize = require("./models/dbConnection");
const { QueryTypes } = require('sequelize');

var ids = 0;

function getLustOP(){
    init_models(sequelize).Orders_Progress.findOne({
        order: [ [ 'id', 'DESC' ]],  },).then(response => {
        ids = response.id;
    })
}
getLustOP();

var idsOr = 0;

function getLustOPOR(){
    init_models(sequelize).Orders.findOne({
        order: [ [ 'id', 'DESC' ]],  },).then(response => {
        idsOr = response.id;
    })
}
getLustOPOR();

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/orders_progress_lust', (req, res) => {
    init_models(sequelize).Orders_Progress.findOne({
        order: [ [ 'id', 'DESC' ]],  },).then(response => {
        res.status(200).send(response.id);
    }).catch(error => {
            res.status(500).send(error);
        })

});
app.get('/companies', (req, res) => {
    init_models(sequelize).Companies.findAll({raw:true}).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })

});
app.get('/clients', (req, res) => {
    init_models(sequelize).Clients.findAll({raw:true}).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })

});
app.get('/clients/:id', (req, res) => {
    init_models(sequelize).Clients.findByPk(req.params.id
    ).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});
app.get('/orders', (req, res) => {
    init_models(sequelize).Orders.findAll(
        {where:{
                deleted:'0',
    }}).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })

});
app.get('/companies/:id', (req, res) => {
    init_models(sequelize).Companies.findByPk(req.params.id).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});
app.put('/orders/update/:id',(req,res)=>{
    init_models(sequelize).Orders.update({
        name:req.body.Name,
        discription:req.body.Discription,
        informaprod:req.body.Informofprod,
        price:req.body.Price,
        date_start:req.body.Datestart,
        date_end:req.body.Dateend,
        stage:req.body.Stage,
        deleted:req.body.Deleted,
    },{
        where:{
            id:req.params.id,
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    })
    }
);
app.post(
    '/orders/add',(req,res)=>{
        idsOr++;
        init_models(sequelize).Orders.create({
            id: idsOr,
            name:req.body.Name,
            clients_id:req.body.Clients_id,
            stage:'1',
            employees_id:'1',
            deleted:'0'
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        })
    }
);
app.post(
    '/orders_progress/add',(req,res)=>{
        ids++;
         init_models(sequelize).Orders_Progress.create({
            id: ids,
            stage:req.body.Stage,
            price:req.body.Price,
            discription:req.body.Discription.toString(),
            orders_id:req.body.Orders_id.toString(),
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        })
    }
);
app.put('/companies/update/:id',(req,res)=>{
        init_models(sequelize).Companies.update({
            name:req.body.Name,
            inn:req.body.Inn,
            location:req.body.Location,
            telephone:req.body.Telephone,
            email:req.body.Email,
            img:req.body.Img,
        },{
            where:{
                id:req.params.id,
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        })
    }
);
app.get('/performers', (req, res) => {
    init_models(sequelize).Performers.findAll({raw:true}).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })

});
app.get('/performers/:id', (req, res) => {
    init_models(sequelize).Performers.findByPk(req.params.id).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});
app.get('/ordersprogress/:id', (req, res) => {
    sequelize.query(`SELECT op.id, op.stage,op.price,op.discription,op.orders_id, ord.name as nameOrder, ord.discription as discriptionOrder, ord. informaprod as informaprodOrder FROM "Orders_Progress" op JOIN "Orders" ord On ord.id = op.orders_id where op.orders_id = ${[req.params.id]}`, { type: QueryTypes.SELECT })
       .then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});
app.get('/orders/:id', (req, res) => {
    sequelize.query(`SELECT op.id, op.clients_id,op.contracts_id,op.employees_id,op.name,op.discription,op.informaprod,op.price,op.date_start,op.date_end,op.stage, ord.name as nameClient, ord.telephone as telephoneClient, ord.city as cityClient, ord.email as emailClient, ord.img as imgClient FROM "Orders" op JOIN "Clients" ord On ord.id = op.clients_id where op.id = ${[req.params.id]}`, { type: QueryTypes.SELECT })
        .then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});