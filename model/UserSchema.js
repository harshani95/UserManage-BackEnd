const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['ADMIN', 'USER'],
            required: true
          },

        status: {
            type: String,
            enum: ['ACTIVE', 'ONBOARD', 'INACTIVE'],
            required: true
          },

        basic_info: {
            first_name: { 
                type: String, 
                required: true
             },

            last_name: {
                type: String,
                required: true 
            },

            dob: { 
                type: String, 
                required: true 
            },

            gender: { 
                type: String, 
                required: true 
            }
          },

        contact_info: {
            mobile_number: {
                type: String, 
                required: true 
            },

            email: { 
                type: String, 
                required: true 
            }
          },

        auth_info: {
            password: { 
                type: String, 
                required: true 
            }
          }

        });

    module.exports = mongoose.model('user', UserSchema);