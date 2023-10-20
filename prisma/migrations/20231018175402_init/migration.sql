-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "deploymentLink" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "altImage" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
