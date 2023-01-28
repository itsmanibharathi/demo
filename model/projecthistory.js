const mongoose = require('mongoose');
const { Schema } = mongoose

const projecthistorySchema = new Schema({
    project_id: {
        type:Schema.Types.ObjectId,
        ref:"Project"
    },
    from:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    to:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    accepted_on: {
        type: Date,
    },
    completed_on: {
        type: Date,
    },
    project_status: {
        type: String,
        enum: ['created', 'pending-admin', 'pending-user', 'assigned', 'partial', 'completed'],
        default: 'created'
    },
});


module.exports = mongoose.model("ProjectHistory", projecthistorySchema);
