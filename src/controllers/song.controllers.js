const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const { json } = require('sequelize');

const getAll = catchError(async( req, res) => {
    const result = await Song.findAll()
    return res.json(result)
});

const create = catchError(async(req,res)=>{
    const result= await Song.create(req.body)
    return res.status(201).json(result)
})
const getOne = catchError(async(req,res)=>{
    const {id}=req.params
    const result= await Song.findByPk(id)
    if(!result) res.status(404).json({message:"Song not found"})
    return res.json(result)
})

const destroy= catchError(async(req,res)=>{
    const {id}=req.params
    const result= await Song.destroy({where:{id}})
    if(!result) return res.status(404).json({message:"Song doesn´t exist"})
    return res.status(204).json({message:"Song deleted"})
})

const update = catchError(async(req,res)=>{
    const {id}=req.params
    const result=await Song.update(req.body,
         {where:{id}, returning:true})
         
    if(!result) return res.sendStatus(404)

    return json.result
})
module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}