/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("students").truncate()
  await knex("students").insert([
    {
      student_name: "Ali",
      student_grade: 75,
    },
    {
      student_name: "Veli",
      student_grade: 90,
    },
    {
      student_name: "Ayşe",
      student_grade: 100,
    },
  ]);
};
