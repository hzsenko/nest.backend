import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    required: true
  })
  readonly title: string;
  @ApiProperty({
    required: true
  })
  readonly done: boolean;
}
