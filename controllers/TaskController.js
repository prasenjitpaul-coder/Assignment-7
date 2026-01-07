export const  getAll =  (req, res)=>{

 res.status(200).json({
    mass: "All Task"
 });
};


export const  getById =  (req, res)=>{

 res.status(200).json({
    mass: "This is your perticular ID"
 });
};

export const postTask =  (req, res)=>{

 res.status(200).json({
    mass: "Task Posted"
 });
};

export const patchById =  (req, res)=>{

 res.status(200).json({
    mass: "Updated"
 });
};

export const  deleteById =  (req, res)=>{

 res.status(200).json({
    mass: "Deleted"
 });
};