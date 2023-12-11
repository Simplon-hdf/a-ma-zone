-- CreateTable
CREATE TABLE "Users" (
    "user_UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(30) NOT NULL,
    "user_name" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_user_uuid" PRIMARY KEY ("user_UUID")
);

-- CreateTable
CREATE TABLE "Products" (
    "product_UUID" VARCHAR(36) NOT NULL,
    "product_name" VARCHAR(20) NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_product_uuid" PRIMARY KEY ("product_UUID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_number" SERIAL NOT NULL,
    "order_total_cost_ht" INTEGER NOT NULL,
    "order_total_quantity" INTEGER NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivrer_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_UUID" VARCHAR(36) NOT NULL,

    CONSTRAINT "orders_order_number" PRIMARY KEY ("order_number")
);

-- CreateTable
CREATE TABLE "Belong" (
    "order_number" INTEGER NOT NULL,
    "product_UUID" TEXT NOT NULL,

    CONSTRAINT "Belong_pkey" PRIMARY KEY ("product_UUID","order_number")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_UUID_key" ON "Users"("user_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_pseudo_key" ON "Users"("user_pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_name_key" ON "Users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_password_key" ON "Users"("user_password");

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_UUID_key" ON "Products"("product_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Belong_order_number_product_UUID_key" ON "Belong"("order_number", "product_UUID");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "order_user_fk" FOREIGN KEY ("user_UUID") REFERENCES "Users"("user_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belong" ADD CONSTRAINT "belong_order_number" FOREIGN KEY ("order_number") REFERENCES "Orders"("order_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belong" ADD CONSTRAINT "belong_product_uuid" FOREIGN KEY ("product_UUID") REFERENCES "Products"("product_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
