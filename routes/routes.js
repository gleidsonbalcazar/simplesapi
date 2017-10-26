var appRouter = function(app){
  

  app.post("/", function(req, res){
    var codigo = req.body.codigo;
    if (!codigo){
      res.status(401).send({message: 'Impossivel verificar codigo'})
    } 

    var imagens = [
      "assets/photos/2.jpg",
      "assets/photos/1.jpg",
      "assets/photos/3.jpg",
      "assets/photos/4.jpg",
      "assets/photos/5.jpg",
      "assets/photos/6.jpg",
      "assets/photos/7.jpg",
      "assets/photos/8.jpg",
      "assets/photos/9.jpg",
      "assets/photos/10.jpg",
      "assets/photos/11.jpg",
      "assets/photos/12.jpg",
      "assets/photos/13.jpg",
      "assets/photos/14.jpg"

    ]

    if (codigo == "000A5B"){
      res.send(imagens)
    } else {
      res.status(400).send({ message: 'Código inválido'})
    }
  })



}

module.exports = appRouter;