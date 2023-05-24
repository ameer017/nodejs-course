const cohortDb = {
    cohort : require('../models/cohorts.json'),
    setUser: function(data) {
        this.cohort = data
    }
}

const fsPromises = require('fs/promises')
const path = require('path')

const regHandler = async (req, res) => {
    const {
        firstname, 
        lastname, 
        stateOfOrigin, 
        gender, 
        dob, 
        academicQualification, 
        email
    } = req.body


    if (!firstname || !lastname || !stateOfOrigin || !gender || !dob || !academicQualification || !email) return res.status(400).json({message: "username and password required"});

    // duplicate email
    const duplicate = cohortDb.users.find(person => person.email === email)
   if(duplicate) return res.status(409).json({message: `User ${email} already exist`}) //conflict status

   try {
    const newCohort = {
        firstname: firstname, 
        lastname: lastname,
        stateOfOrigin: stateOfOrigin,
        gender: gender,
        dob: dob,
        academicQualification: academicQualification, 
        email: email
    }
    cohortDb.setUser([...cohortDb.cohort, newCohort])

    fsPromises.writeFile(path.join(__dirname, '..', 'models', 'users.json'), JSON.stringify(cohortDb.users))
    console.log(newUser)
    res.status(201).json({message: `User ${newCohort.firstname} has been registered successfully`})
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

module.exports = regHandler