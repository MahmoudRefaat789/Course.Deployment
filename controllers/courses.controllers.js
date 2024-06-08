const { validationResult } = require("express-validator");

const Course = require("../models/products.model");

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  console.log(courses);

  res.json(courses);
};

const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);

  if (!course) {
    res.status(404).json({ msg: "Course Not Found" });
  } else {
    res.json(course);
  }
};

const addCourse = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json(errors.array());
  }

  const newCourse = new Course(req.body);
  await newCourse.save();

  res.json(newCourse);
};

const updateCourse = (req, res) => {
  const id = +req.params.courseId;
  console.log(id);
  let course = courses.find((course) => course.id === id);

  course = { ...course, ...req.body };
  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  let id = +req.params.courseId;
  courses = courses.filter((course) => course.id !== id);

  res.json({ success: true });
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
