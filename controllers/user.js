let users = [
    {id: 1, nama:"Faiza", email: "faizacahyapradani001@gmail.com"},
    {id: 2, nama:"zaza", email: "faizacahya001@gmail.com"},
  ]

  module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }else{
            res.json({
                status: false,
                message: "Data Masih Kosong"

            })
        }
    },
    store: (req, res) => {
        users.push(req.body)
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Ditambahkan"
         }) 
      },
      update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
          if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Diubah"
         }) 
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil dihapus"
         }) 
      }
  }
  