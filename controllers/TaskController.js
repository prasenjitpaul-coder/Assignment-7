

export const  getAll =  (req, res)=>{

 res.status(200).json({
   message: "All Task"
 });
};


export const  getById =  (req, res)=>{

 res.status(200).json({
   message: "This is your particular ID"
 });
};

export const postTask =  (req, res)=>{

 res.status(200).json({
    message: "Task Posted"
 });
};

export const patchById =  (req, res)=>{

 res.status(200).json({
    message: "Updated"
 });
};

export const  deleteById =  (req, res)=>{

 res.status(200).json({
   message: "Deleted"
 });
};