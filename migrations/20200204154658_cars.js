exports.up = async function(knex) {
    
    await knex.schema.createTable("cars", (table) => {
      table.increments("id");
      table
        .string("VIN")
        .notNull()
        .unique();
      table.text("make").notNull();
      table.text("model").notNull();
      table.decimal("mileage").notNull();
      table.string("trans_type");
      table.boolean("clean_title").defaultTo(false);
      table.boolean("salvaged-title").defaultTo(false);
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars");
  };