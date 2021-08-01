-- CreateTable
CREATE TABLE "Profile" (
    "_id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "location" TEXT,
    "bio" TEXT,
    "links" TEXT[],

    PRIMARY KEY ("_id")
);
