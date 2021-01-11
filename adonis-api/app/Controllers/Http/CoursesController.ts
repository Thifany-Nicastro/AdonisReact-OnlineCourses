import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'

export default class CoursesController {
  public async index ({}: HttpContextContract) {
    return await Course.all();
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({ params }: HttpContextContract) {
    const course = await Course.findOrFail(params.id)
    await course.delete()
  }
}
