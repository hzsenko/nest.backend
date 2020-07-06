import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    required: true
  })
  readonly title: string;
  @ApiProperty({
    required: false
  })
  readonly done: boolean;
}
