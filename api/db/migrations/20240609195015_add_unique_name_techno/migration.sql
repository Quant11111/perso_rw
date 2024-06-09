/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Techno` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Techno_name_key" ON "Techno"("name");
