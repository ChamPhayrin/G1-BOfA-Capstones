const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) {
      console.error('No roles found in request:', req.roles);
      return res.status(401).json({ message: "Unauthorized: No role_code found" });
    }

    const rolesArray = [...allowedRoles];
    const hasRole = req.roles.some((role) => rolesArray.includes(role));

    if (!hasRole) {
      console.error('User does not have required role:', req.roles);
      return res.status(403).json({ message: "Forbidden: You do not have permission" });
    }

    next();
  };
};

module.exports = verifyRoles;