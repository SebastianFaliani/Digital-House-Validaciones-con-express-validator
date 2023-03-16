module.exports = {
      login: (req, res) => res.render("./users/login"),
      register: (req, res) => res.render("./users/register"),
      admin: (req, res) => res.render("./users/admin", { name: req.body.name }),
};
