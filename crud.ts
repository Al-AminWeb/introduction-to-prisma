import {prisma} from "./lib/prisma";


async function run(){
    // const createUser = await prisma.user.create({
    //     data: {
    //         name:"alif islam",
    //         email:"alif@nxt.com"
    //     }
    // })
    // console.log("User created:", createUser);

    // const createPost = await prisma.post.create({
    //     data:{
    //         title:"My first post",
    //         content:"This is the content of my first post",
    //         isPublished:true,
    //         authorId:1
    //     }
    // })
    // console.log("Post created:", createPost);

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:"This is my bio",
    //         userId:1
    //     }
    // })
    // console.log("Profile created:", createProfile);

    // retrive all users
    // const users = await prisma.user.findMany();
    // console.log("All users:", users);

    // const updateUser = await prisma.profile.update({
    //     where:{
    //         userId:1
    //     },
    //     data:{
    //         bio:"Updated bio information"
    //     }
    // })
    // console.log("Updated profile:", updateUser);

    const deleteUser = await prisma.user.delete({
        where:{
            id:2
        }
    })
    console.log("Deleted user:", deleteUser);
}

run()