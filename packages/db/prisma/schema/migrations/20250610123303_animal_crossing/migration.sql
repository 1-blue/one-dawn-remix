-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "animal_crossing";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "template_one";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "template_two";

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_species" AS ENUM ('Bird', 'Squirrel', 'Pig', 'Bear_cub', 'Gorilla', 'Alligator', 'Koala', 'Eagle', 'Anteater', 'Penguin', 'Bull', 'Mouse', 'Cat', 'Horse', 'Hamster', 'Kangaroo', 'Wolf', 'Chicken', 'Elephant', 'Rhinoceros', 'Lion', 'Sheep', 'Deer', 'Tiger', 'Dog', 'Bear', 'Cow', 'Hippo', 'Duck', 'Goat', 'Ostrich', 'Rabbit', 'Frog', 'Octopus', 'Monkey');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_personality" AS ENUM ('Jock', 'Cranky', 'Peppy', 'Big_sister', 'Lazy', 'Normal', 'Snooty', 'Smug');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_birthday_month" AS ENUM ('August', 'January', 'July', 'April', 'October', 'June', 'November', 'February', 'March', 'September', 'December', 'May');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_debut" AS ENUM ('DNM', 'AC', 'E_PLUS', 'NH', 'PC', 'WA', 'WW', 'CF', 'NL', 'HHD', 'FILM', 'NLWA', 'DNM_PLUS');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_sign" AS ENUM ('Leo', 'Aquarius', 'Cancer', 'Taurus', 'Capricorn', 'Libra', 'Gemini', 'Scorpio', 'Pisces', 'Virgo', 'Sagittarius', 'Aries');

-- CreateTable
CREATE TABLE "animal_crossing"."animal_crossing_villager" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt_name" TEXT NOT NULL,
    "title_color" TEXT NOT NULL,
    "text_color" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "species" "animal_crossing"."animal_crossing_villager_species" NOT NULL,
    "personality" "animal_crossing"."animal_crossing_villager_personality" NOT NULL,
    "gender" "animal_crossing"."animal_crossing_villager_gender" NOT NULL,
    "birthday_month" TEXT NOT NULL,
    "birthday_day" TEXT NOT NULL,
    "sign" "animal_crossing"."animal_crossing_villager_sign" NOT NULL,
    "quote" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,
    "clothing" TEXT NOT NULL,
    "islander" BOOLEAN NOT NULL,
    "debut" "animal_crossing"."animal_crossing_villager_debut" NOT NULL,
    "prev_phrases" TEXT[],
    "appearances" "animal_crossing"."animal_crossing_villager_debut"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name_kr" TEXT NOT NULL,
    "personality_kr" TEXT NOT NULL,
    "gender_kr" TEXT NOT NULL,
    "birthday_month_kr" TEXT NOT NULL,
    "sign_kr" TEXT NOT NULL,
    "debut_kr" TEXT NOT NULL,
    "species_kr" TEXT NOT NULL,
    "quote_kr" TEXT NOT NULL,

    CONSTRAINT "animal_crossing_villager_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "animal_crossing_villager_name_key" ON "animal_crossing"."animal_crossing_villager"("name");
