const router = require('express').Router();

const students = [
    {
        name: "Deodat Adomako",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "400",
        image:"/images/Deodat.jpg"
    },
    {
        name: "Maxwell Goku",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/Goku.jpg"
    },
    {
        name: "Marlian Legend",
        DOB: "12/20/2000",
        program: "BSC IT",
        level: "300",
        image :"/images/Legend.jpg"
    },
    {
        name: "Abdallah Marlian Jnr",
        DOB: "12/20/2000",
        program: "BSC MIS",
        level: "200",
        image:"/images/marlianjnr.jpg"
    },
    {
        name: "Dominic Bluawofogbe",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "100",
        image:"/images/Dominic.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;