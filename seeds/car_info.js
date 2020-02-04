
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate()
  await knex("cars").del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {id: 1, VIN: 'kkjhjd897987389734', make: "Toyato", model: "Corolla", mileage: 3433.2},
        {id: 2, VIN: 'kkj343hdhd89734', make: "Nissan", model: "Xterra", mileage: 36366363.2},
        {id: 3, VIN: 'kddfdfd987389734', make: "Nissan", model: "Centra", mileage: 33489333.2},
      ]);
    });
};
