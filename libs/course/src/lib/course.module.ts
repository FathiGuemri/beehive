import { Module } from '@nestjs/common'
import { CourseResolver } from './course.resolver';

@Module({
  controllers: [],
  providers: [CourseResolver],
  exports: [],
})
export class CourseModule {}
