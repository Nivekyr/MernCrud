const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const CrudModel = require('./models/Cars')


app.use(express.json())
app.use(cors());

mongoose.connect('mongodb+srv://Nivekyr:4SZyvoTZhOjoXijg@cluster0.2worv.mongodb.net/cars?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})




app.post('/insert', async(req, res) => {

    const infoText = req.body.infoText
    const infoRadio = req.body.infoRadio
    const infoDate = req.body.infoDate
    const infoNumber = req.body.infoNumber
    const infoList = req.body.infoList
    const infoCheckBox = req.body.infoCheckBox
    const crud = new CrudModel({
        infoText: infoText,
        infoRadio: infoRadio,
        infoDate: infoDate,
        infoNumber: infoNumber,
        infoList: infoList,
        infoCheckBox: infoCheckBox,
    });

    try {
        await crud.save();
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
});



app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;

    await CrudModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})


app.get('/read', async(req, res) => {
    CrudModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
});

app.put('/update', async(req, res) => {
    const newinfoText = req.body.newinfoText
    const newinfoRadio = req.body.newinfoRadio
    const newinfoDate = req.body.newinfoDate
    const newinfoNumber = req.body.newinfoNumber
    const newinfoList = req.body.newinfoList
    const newinfoCheckBox = req.body.newinfoCheckBox

    const id = req.body.id

    try {
        await CrudModel.findById(id, (err, editedcrud) => {
            editedcrud.infoText = newinfoText;
            editedcrud.infoRadio = newinfoRadio;
            editedcrud.infoDate = newinfoDate;
            editedcrud.infoNumber = newinfoNumber;
            editedcrud.infoList = newinfoList;
            editedcrud.infoCheckBox = newinfoCheckBox;

            editedcrud.save();
            res.send('edited')
        })
    } catch (err) {
        console.log(err)
    }
});


app.listen(3001, () => {
    console.log('Server running on port 3001');
});