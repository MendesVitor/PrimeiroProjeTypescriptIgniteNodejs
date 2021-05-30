import {Request,Response} from 'express';
import CreateCourseService from './createCourseService';

export function createCourse(requst:Request,response:Response){
    CreateCourseService.execute({
        educator:"Vítor",
        name:"NodeJS",
    })
    CreateCourseService.execute({
        educator:"Vítor",
        name:"ReactJS",
    })

    return response.send();
}