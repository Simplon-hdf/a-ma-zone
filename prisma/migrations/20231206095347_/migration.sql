-- CreateTable
CREATE TABLE "Products" (
    "product_UUID" VARCHAR(36) NOT NULL,
    "product_name" VARCHAR(20) NOT NULL,
    "product_description" VARCHAR(500) NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_products_uuid" PRIMARY KEY ("product_UUID")
);

-- CreateTable
CREATE TABLE "Users" (
    "UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_number" VARCHAR(36) NOT NULL,
    "order_total_cost_ht" INTEGER NOT NULL,
    "order_total_quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivrer_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "User_UUID" VARCHAR(36) NOT NULL,

    CONSTRAINT "orders_order_number" PRIMARY KEY ("order_number")
);

-- CreateTable
CREATE TABLE "Belong" (
    "product_UUID" TEXT NOT NULL,
    "order_number" TEXT NOT NULL,

    CONSTRAINT "Belong_pkey" PRIMARY KEY ("product_UUID","order_number")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_UUID_key" ON "Products"("product_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_UUID_key" ON "Users"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_pseudo_key" ON "Users"("user_pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_password_key" ON "Users"("user_password");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_order_number_key" ON "Orders"("order_number");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_User_UUID_fkey" FOREIGN KEY ("User_UUID") REFERENCES "Users"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belong" ADD CONSTRAINT "Belong_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("product_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
