export default async function Hello(req, res){
    res.status(200).json({message : "hello world"});
}