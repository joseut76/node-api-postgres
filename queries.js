const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})
const getStudents = (request, response) => {
  pool.query('SELECT * FROM students ORDER BY studentId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM students WHERE studentId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createStudent = (request, response) => {
  const { firstname, lastname, grades } = request.body

  pool.query('INSERT INTO students (firstname, lastname) VALUES ($1, $2) RETURNING*', [firstname, lastname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Student added with studentId: ${result.insertId}`)
  })
}



module.exports = {
  getStudents,
  getStudentById,
  createStudent
  
}