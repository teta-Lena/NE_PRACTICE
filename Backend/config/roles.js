const allRoles = {
    //roles and the rights they have
    admin: ["manageUsers"],
    user: ["editProfile"],
  };
  
  const roles = Object.keys(allRoles);
  const roleRights = new Map(Object.entries(allRoles));
  
  module.exports = {
    roles,
    roleRights,
  };
  