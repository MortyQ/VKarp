const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.firstName) {
        data.slug = slugify(data.firstName);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.firstName) {
        data.slug = slugify(data.firstName);
      }
    },
  },
};
