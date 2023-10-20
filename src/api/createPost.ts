import { prisma } from "@/lib/prisma"

interface Props {
    titlePost: string,
    subtitlePost: string,
    deploymentLink: string,
    githubLink: string,
    date: string,
    srcImg: string,
    altImg: string
}

export default async function createPost({ titlePost, subtitlePost, deploymentLink, githubLink, date, srcImg, altImg }: Props) {
    const user = await prisma.profile.createMany({
      data: {
        title: titlePost,
        subtitle: subtitlePost,
        deploymentLink: deploymentLink,
        githubLink: githubLink,
        urlImage: srcImg,
        altImage: altImg,
        date: date,
      },
    })
    console.log(user)
}