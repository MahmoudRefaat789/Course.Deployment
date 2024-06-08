const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const coursesControllers = require("../controllers/courses.controllers");

router
  .route("/api/courses")
  .get(coursesControllers.getAllCourses)
  .post(
    body("title")
      .notEmpty()
      .withMessage("title is reqruired")
      .isLength({ min: 2 })
      .withMessage("at least 2 digits"),
    body("price")
      .notEmpty()
      .withMessage("price is reqruired")
      .isLength({ min: 3 })
      .withMessage("at least 3 digits"),
    coursesControllers.addCourse
  );

router
  .route("/api/courses/:courseId")
  .get(coursesControllers.getCourse)
  .patch(coursesControllers.updateCourse)
  .delete(coursesControllers.deleteCourse);

module.exports = router;
