/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}
    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }
    @Get(':courseId')
    async getCourse(@Param('courseId') courseId: number) {
        const course = await this.coursesService.getCourse(courseId);
        return course;
    }
    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesService.addCourse(createCourseDto);
        return course;
    }
    @Delete()
    async deleteCourse(@Query() query) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
    @Put(':courseId')
    async updateCourse(@Body() updateCourse: CreateCourseDto, @Param('courseId') courseId: number) {
        const courses = await this.coursesService.updateCourse(courseId,updateCourse);
        return courses;
    }
}
