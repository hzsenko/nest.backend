import {ApiProperty} from "@nestjs/swagger";

export class UpdateTodoDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  done: boolean;
}
