const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const { faDiagramSuccessor } = require('@fortawesome/free-solid-svg-icons');

const prisma = new PrismaClient()

router.get('/getPosts', async(request ,response) => {
    try {
        const posts = await prisma.post.findMany()
        response.json(posts)
    } catch (error) {
        console.error("Server error: " + error);
    }
})

router.post('/createPost' ,async(request ,response) => {
    const {
        title,
        content,
        published = false,
        authorId
    } = request.body

    if (!title || !content || !authorId) {
        return response.status(404).json({
            status: false,
            error: "Missing required fields"
        })
    }

    try {
        await prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId
            }
        })

        response.json({
            status: true,
            message: "Created a post successfully"
        })
    } catch (error) {
        console.error(error);
    }
})

router.post('/setPublished', async(request, response) => {
    const {
        published,
        postId,
    } = request.body;

    if (published === undefined) {
        return response.status(400).json({
            status: false,
            message: "Invalid published value"
        })
    }

    if (!postId) {
        return response.status(400).json({
            error: "Missing post id value"
        })
    }
    
    if (typeof published === 'boolean') {
        return response.status(400).json({
            status: false,
            message: "Missing published value"
        })
    }

    try {
        const updatePost = await prisma.post.update({
            where: {
                id: parseInt(postId)
            },
            data: {
                published
            }
        })

        if (updatePost) {
            response.status(200).json({
                status: true,
                message: "Post has been updated successfully" 
            })
        } else {
            response.status(404).json({
                status: false,
                message: "Post not found" 
            })
        }
    } catch (error) {
        console.error(error);
    }
})

router.post('/')

module.exports = router