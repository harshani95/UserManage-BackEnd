
const UserSchema= require('../model/UserSchema');

const create=(req,resp)=>{
    const user = new UserSchema({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        dob: req.body.dob,
        gender:req.body.gender,
        mobile_number:req.body.mobile_number, 
        email:req.body.email 
    });

    user.save().then(resp=>{
        resp.status(201).json({'message':'User saved!'});
    }).catch(error=>{
        return resp.status(500).json(error);
    });
}

const findAll=(req,resp)=>{
    try{
        const {searchText, page=1, size=10}=req.query;

        const pageNumber=parseInt(page);
        const pageSize=parseInt(size);

       
        const skip= (pageNumber-1) * pageSize;

        const data =  CustomerSchema.find(query)
            .limit(pageSize)
            .skip(skip)
            .then(response=>{
                return resp.status(200).json(response);
            })
        
    }catch (error){
        return resp.status(500).json({'message':'internal server error'});
    }
}

module.exports={
    create,
    findAll
}