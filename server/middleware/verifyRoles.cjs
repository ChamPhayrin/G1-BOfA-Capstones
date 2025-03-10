const verifyRoles = (...allowedRoleCodes) => {
  return (req, res, next) => {
    // Check if the request has a role_code attached
    if (!req?.role_code) {
      console.error('No role_code found in request');
      return res.status(401).json({ message: 'Unauthorized: No role_code found' });
    }

    // Debugging: Log the user's role_code and allowed role_codes
    console.log('User Role Code:', req.role_code);
    console.log('Allowed Role Codes:', allowedRoleCodes);

    // Check if the user has any of the allowed role_codes
    const hasPermission = allowedRoleCodes.includes(req.role_code);

    if (!hasPermission) {
      console.error('User does not have required role_code');
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    // Proceed to the next middleware or route handler
    next();
  };
};

module.exports = verifyRoles;