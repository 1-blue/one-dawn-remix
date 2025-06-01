-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "template_one";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "template_two";

-- CreateTable
CREATE TABLE "template_one"."template_one_dogs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_one_dogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_two"."template_two_dogs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_two_dogs_pkey" PRIMARY KEY ("id")
);
