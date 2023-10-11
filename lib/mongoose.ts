import mongoose from 'mongoose'

let isConnected = false

export const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL) return console.log('MONGODB url not found')
    if (isConnected) return console.log('already connected to db')

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true

        console.log('db conectada')
    }catch (error) {
        console.log(error)
    }
}