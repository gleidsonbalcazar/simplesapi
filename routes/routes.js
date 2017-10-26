var appRouter = function(app){
  

  app.post("/", function(req, res){
    var codigo = req.body.codigo;
    if (!codigo){
      res.status(401).send({message: 'Impossivel verificar codigo'})
    } 

    var imagens = [
      "images/photos/2.jpg",
      "images/photos/1.jpg",
      "images/photos/3.jpg",
      "images/photos/4.jpg",
      "images/photos/5.jpg",
      "images/photos/6.jpg",
      "images/photos/7.jpg",
      "images/photos/8.jpg",
      "images/photos/9.jpg",
      "images/photos/10.jpg",
      "images/photos/11.jpg",
      "images/photos/12.jpg",
      "images/photos/13.jpg",
      "images/photos/14.jpg"

    ]

    if (codigo == "000A5B"){
      res.send(imagens)
    } else {
      res.status(400).send({ message: 'Código inválido'})
    }
  })



}

module.exports = appRouter;