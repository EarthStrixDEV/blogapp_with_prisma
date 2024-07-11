const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient()

router.get('/getPosts', async(request ,response) => {
    try {
        const posts = await prisma.post.findMany()
        response.json(posts)
    } catch (error) {
        console.error("Server error: " + error);
    }
})

router.get('/getPostById/:id', async(request ,response) => {
    const postId = request.params.id;

    try {
        const posts = await prisma.post.findMany({
            where: {
                id: parseInt(postId)
            }
        })
        
        if (!posts) {
            return response.status(400).json({
                status: false,
                message: "Post not found"
            })
        }

        response.json(posts)
    } catch (error) {
        console.error("Server error: " + error);
    }
})

router.post('/createPost' ,async(request ,response) => {
    const {
        title,
        content,
        reference,
        published,
        categories,
        authorId,
    } = request.body

    if (!title || !content || !authorId) {
        return response.status(404).json({
            status: false,
            error: "Missing required fields"
        })
    }

    try {
        const createPost = await prisma.post.create({
            data: {
                title,
                content,
                published,
                reference,
                authorId,
                categories: {
                    connect: {
                        name: categories
                    }
                }
            }
        })

        await prisma.category.update({
            where: {
                name: categories
            },
            data: {
                posts: {
                    connect: {
                        id: createPost.id,
                    }
                }
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

router.post("/updatePost",(request ,response) => {
    const {
        
    } = request.body
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

router.post('/deletePost/:postId', async(request, response) => {
    const postId = request.params.postId
    
    try {
        const res = await prisma.post.delete({
            where: {
                id: parseInt(postId)
            }
        })

        if (!res) {
            return response.json({
                status: false,
                message: 'Couldn\'t delete the post'
            })
        }

        response.json({
            status: true,
            message: 'Delete post successfully'
        })
    } catch (error) {
        console.error(error);
    }
})

module.exports = router