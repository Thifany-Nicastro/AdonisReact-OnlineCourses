import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from "App/Models/Course";

export default class CourseSeeder extends BaseSeeder {
  public async run () {
    await Course.createMany([
      {
        name: 'Laravel Complete',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur rutrum lectus, ut euismod dolor rhoncus id. Maecenas commodo eu magna laoreet rhoncus.',
        price: 70.00,
      },
      {
        name: 'NodeJS Basic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur rutrum lectus, ut euismod dolor rhoncus id. Maecenas commodo eu magna laoreet rhoncus.',
        price: 50.00,
      },
      {
        name: 'React Native Advanced',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur rutrum lectus, ut euismod dolor rhoncus id. Maecenas commodo eu magna laoreet rhoncus.',
        price: 130.00,
      },
    ])
  }
}
