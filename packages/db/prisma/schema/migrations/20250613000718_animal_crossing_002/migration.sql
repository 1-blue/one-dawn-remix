/*
  Warnings:

  - Added the required column `icon_url` to the `animal_crossing_villager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `animal_crossing_villager` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_fav_color" AS ENUM ('Aqua', 'Green', 'Black', 'Blue', 'Pink', 'White', 'Red', 'Yellow', 'Brown', 'Colorful', 'Orange', 'Purple', 'Gray', 'Beige');

-- CreateEnum
CREATE TYPE "animal_crossing"."animal_crossing_villager_fav_style" AS ENUM ('Active', 'Cute', 'Cool', 'Simple', 'Elegant', 'Gorgeous');

-- AlterTable
ALTER TABLE "animal_crossing"."animal_crossing_villager" ADD COLUMN     "catchphrase" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "catchphrase_kr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "fav_colors" "animal_crossing"."animal_crossing_villager_fav_color"[] DEFAULT ARRAY[]::"animal_crossing"."animal_crossing_villager_fav_color"[],
ADD COLUMN     "fav_colors_kr" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "fav_styles" "animal_crossing"."animal_crossing_villager_fav_style"[] DEFAULT ARRAY[]::"animal_crossing"."animal_crossing_villager_fav_style"[],
ADD COLUMN     "fav_styles_kr" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "icon_url" TEXT NOT NULL,
ADD COLUMN     "photo_url" TEXT NOT NULL;
