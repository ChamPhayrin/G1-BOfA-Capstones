const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {

    if (!req?.roles) {
      return res.status(401).json({ message: "Unauthorized" }); // 401 Unauthorized
    }

    const rolesArray = [...allowedRoles];

    const result = req.roles.some((role) => rolesArray.includes(role));

    if (!result) {
      return res.status(403).json({ message: "Forbidden" }); // 403 Forbidden
    }

    next();
  };
};

module.exports = verifyRoles;