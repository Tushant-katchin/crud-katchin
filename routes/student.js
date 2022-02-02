const express=require('express')
const app=express()
const router=express.Router()
const student=require('../model/data')

app.use(express.json());

router.get('/', async (req,res)=>{
    try{

        const students=await student.find()
        res.json(students)
    } 
    catch(error){
        res.send(error)
    }
      
})
router.get('/:id',checkk,(req,res)=>{
    res.send(res.students.name)
})
router.post('/',async (req,res)=>{
    
    const students=new student({
        _id:req.body._id,
        name:req.body.name,
        subject:req.body.subject
    })
try{
  const newstudent= await students.save()
  res.json(newstudent)
}
catch(error){
   res.send(error)
}
})
router.delete('/:id',checkk,async (req,res)=>{
    
     try{
         
         await res.students.remove()
         res.json({message:'students deleted'})
     }
     catch(error){
        res.json({message:error.message})
     }
})
router.patch('/:id',checkk,async(req,res)=>{
    if(req.body._id!==null){
        res.students._id=req.body._id
     }
if(req.body.name!==null){
   res.students.name=req.body.name
}
if(req.body.subject!==null){
    res.students.subject=req.body.subject
}
try{
const updated=await res.students.save()
res.json(updated)
}
catch(err){
res.json({message:err.message})
}
})
async function checkk(req,res,next){
  let students;
  try{
      students=await student.findById(req.params.id)
  }
  catch(error){
     res.json({message:error.message})
  }
  res.students=students
next()
}


module.exports=router