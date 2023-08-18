const db = require('../../DataBase/index');

class CategoryRepository {
  async findAll() {
    const row = await db.query(`
            SELECT * FROM categories ORDER BY name
    `);
    return row;
  }

  async findById(id) {
    const [row] = await db.query(`
        SELECT * FROM categories WHERE id = $1
    `, [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.query(`
            SELECT * FROM categories WHERE name = $1
    `, [name]);
    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
            INSERT INTO categories(name)
            VALUES($1)
            RETURNING *
        `, [name]);
    return row;
  }

  async Update(id, { name }) {
    const [row] = await db.query(`
            UPDATE categories
            SET name = $1
            WHERE id = $2
            RETURNING *
    `, [name, id]);

    return row;
  }

  async Delete(id) {
    const deletObj = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deletObj;
  }
}

module.exports = new CategoryRepository();