import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import CourseValidator from 'App/Validators/CourseValidator'

export default class CoursesController {
  public async index ({}: HttpContextContract) {
    return await Course.all();
  }

  public async store ({ request }: HttpContextContract) {
    // const data = request.all()
    // const course = await Course.create(data)
    const data = await request.validate(CourseValidator)
    const course = await Course.create(data)

    return course
  }

  public async show ({ params }: HttpContextContract) {
    return await Course.findOrFail(params.id)
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({ params }: HttpContextContract) {
    const course = await Course.findOrFail(params.id)
    await course.delete()
  }
}
