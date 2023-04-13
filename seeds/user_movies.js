/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {

      id: 98,
      title: '"Gladiator"',
      overview: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
      release_date: "2000-05-04",
      poster_path: '/dJ2Lr6oglSqyQtoynGl3C8LUnNH.jpg',
      backdrop_path: "/aZtwH3RQ0L8jbInxr7OSc9tlGMJ.jpg",
      vote_average: 78.926,
      genres: "History, Drama"

    }
  ]);
};
