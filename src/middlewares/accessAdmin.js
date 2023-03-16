module.exports = (req, res, next) => {
      let admin = ["Ada", "Greta", "Vim", "Tim"];
      if (admin.includes(req.body.name)) {
            next();
      } else {
            res.render("./users/denied");
      }
};
