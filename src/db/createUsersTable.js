import db from '../config/db.js';

const createUsersTable = async()=>{
    const queryText = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    try{
        db.query(queryText);
        console.log("Users table created Successfully! if not exists");
    }catch(err){
        console.log("Error creating users table:",err);
    }

}

export default createUsersTable;