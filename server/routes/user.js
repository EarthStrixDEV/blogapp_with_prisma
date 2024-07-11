const express = require('express');
const {PrismaClient} = require('@prisma/client');
const router = express.Router();
const validator = require('validator')
const prisma = new PrismaClient()

require('dotenv').config()

router.post('/login', async(request ,response) => {
    const {
        email,
        password
    } = request.body

    if (!validator.isEmail(email)) {
        return response.sendStatus(404).json({
            message: "Invalid email"
        })
    }

    try {
        const data = await prisma.user.findMany({
            where: {
                email: email,
                password: password
            }
        })

        if (data.length > 0) {
            response.json({
                data: data,
                status: true
            })
        } else {
            response.json({
                status: false
            })
        }
    } catch (error) {
        console.error("Server error: " + error);
    }
})

router.post('/register', async(request ,response) => {
    const {
        email,
        password,
        name
    } = request.body

    if (!validator.isEmail(email)) {
        return response.sendStatus(404).json({
            message: 'Invalid email'
        })
    }

    if (!validator.isLength(password ,8 ,20)) {
        return response.sendStatus(404).json({
            message: 'Password must be at least 8 characters long and at least 20 characters'
        })
    }

    try {
        const getDuplicateUser = await prisma.post.findMany({
            where: {
                email: email,
            }
        })
        
        if (getDuplicateUser.length > 0) {
            response.json({
                status: false
            })
            return
        }

        await prisma.user.create({
            data: {
                email: email,
                password: password,
                name: name
            }
        })

        console.log('Add user successfully');
        response.sendStatus(200)
    } catch (error) {
        response.sendStatus(500)
        console.error("Server error: " + error);
    }
})

router.post('/adminValidate',(request ,response) => {
    const getAdminKey = request.body.adminKey;
    const date = new Date()
    let adminKeyRand = `ADMIN_BLOG_${date.getDay()}_${date.getMonth()}`
    getAdminKey === adminKeyRand ? response.sendStatus(200) : response.sendStatus(404)
})

module.exports = router