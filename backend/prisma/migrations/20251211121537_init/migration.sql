-- CreateTable
CREATE TABLE "RiotAccount" (
    "puuid" TEXT NOT NULL,
    "gameName" TEXT NOT NULL,
    "tagLine" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RiotAccount_puuid_key" ON "RiotAccount"("puuid");
