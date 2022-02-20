

function index(req, res){
  res.render('index', {
    title: 'CRUD - Home'
  })
}

module.exports = {
  index,
}