// Verifica se o usuário está autenticado
module.exports = (req, res, next) => {
  // Verifica se existe as informaçoes de usuário dentro da sessao
  if (req.session && req.session.user) {
    res.locals.user = req.session.user
    return next()
  }

  return res.redirect('/')
}
