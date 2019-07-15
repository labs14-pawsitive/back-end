
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('shelter_subscriptions', tbl => {
    tbl.increments();
    tbl.integer('shelter_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelters')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('subscription_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('subscriptions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.boolean('is_active')
        .notNullable()
        .defaultTo(true)
    tbl.timestamp('created_at', { precision: 6 })
        .defaultTo(knex.fn.now(6));
    tbl.date('expiration_date')
  })
  .createTable('donations', tbl => {
    tbl.increments();
    tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('shelter_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelters')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.decimal('amount')
        .notNullable()
        .unsigned();
    tbl.timestamp('created_at', { precision: 6 })
        .defaultTo(knex.fn.now(6));
  })
  .createTable('shelter_follows', tbl => {
    tbl.integer('shelter_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelters')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
  .createTable('shelter_users', tbl => {
    tbl.increments();
    tbl.integer('role_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('shelter_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelters')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('user_id')
        .notNullable()
        .unsigned()
    tbl.string('username')
        .notNullable()
    tbl.timestamp('created_at', { precision: 6 })
        .defaultTo(knex.fn.now(6));
  })
  .createTable('animals', tbl => {
    tbl.increments();
    tbl.string('name', 512)
        .notNullable();
    tbl.integer('shelter_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelters')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('species_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('animal_status_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('animal_status')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('shelter_location_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('shelter_locations')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    tbl.integer('profile_img_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
            .dropTableIfExists('shelter_subscriptions')
            .dropTableIfExists('donations')
            .dropTableIfExists('shelter_follows')
            .dropTableIfExists('shelter_users')
            .dropTableIfExists('animals')
};
