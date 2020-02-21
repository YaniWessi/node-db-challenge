exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increment();

      tbl.string("name", 255).notNullable();

      tbl.string("description", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increment();

      tbl.string("name", 255).notNullable();

      tbl.string("discription", 255).notNullable();
    })

    .createTable("task", tbl => {
      tbl.increment();

      tbl.string("description", 255).notNullable();

      tbl.string("notes", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo();

      tbl
        .integer()
        .unsinged()
        .notNullable()
        .refrences("id")
        .inTable("Projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .creatable("projects_resources", tble => {
      tbl.primary(["project_id", "resource_id"]);

      tbl
        .integer("project_id")
        .unsinged()
        .notNullable()
        .refrences("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("resource_id")
        .unsinged()
        .notNullable()
        .refrences("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
