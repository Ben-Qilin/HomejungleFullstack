-- CreateTable
CREATE TABLE "Plant" (
    "plantId" SERIAL NOT NULL,
    "name_plant" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "water" VARCHAR(3) NOT NULL,
    "sun" VARCHAR(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("plantId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plant_name_plant_key" ON "Plant"("name_plant");
