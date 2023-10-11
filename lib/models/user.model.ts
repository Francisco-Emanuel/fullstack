import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    image: String,
    bio: String,
    minhaRede: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MR"
        }
    ],
    onBoard: {
        type: Boolean,
        default: false
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "community"
        }
    ]
})

const User = mongoose.models.user || mongoose.model('User', userSchema)

export default User