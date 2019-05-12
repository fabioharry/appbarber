// Verifica se já está logado e não deixa acessar a pagina de login novamente
module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }
  return res.redirect('/app/dashboard')
}
