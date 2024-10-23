const express = require('express');
const router = express.Router();

const courseData = [
    {
        CourseID: 100,
        CourseName: 'BCA',
        BCAFees: 100000,
        UniversityFees: 18000
    },
    {
        CourseID: 101,
        CourseName: 'MCA',
        MCAFees: 80000,
        UniversityFees: 8000
    },
    {
        CourseID: 103,
        CourseName: 'FullStack',
        FullstackFees: 90000,
        UniversityFees: 18000
    }
];

router.get('/course/:CourseID', (req, res) => {
    const courseID = parseInt(req.params.CourseID);
    const course = courseData.find(course => course.CourseID === courseID);

    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
});

module.exports = router;
