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
  const { firstname, lastname } = request.body

  pool.query('INSERT INTO students (firstname, lastname) VALUES ($1, $2) RETURNING*', [firstname, lastname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Student added with studentId: ${result.insertId}`)
  })
}

const getGradesByStudentId = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM grades WHERE studentId = $1', [id], (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows);
    });
}

const postGradeByStudentId = (req, res) => {
    const {studentId, course, grade} = req.body;
    if(studentId && className && grade){
        pool.query('INSERT INTO grades (studentId, course, grade) VALUES($1, $2, $3) RETURNING *', [studentId, course, grade], (err, results) =>{
            if(err){
                throw err  
            }
            console.log(results);
            res.status(201).send(`Grade added grade id is: ${results.rows[0].id}`);
        });        
    }        
    else
        res.status(400).send("Not all parameters were passed");
}


module.exports = {
  getStudents,
  getStudentById,
  createStudent, 
  getGradesByStudentId, 
  postGradeByStudentId
  
}