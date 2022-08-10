import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: 'User first Name'
  })
  public firstName: string;
  public lastName: string;
  public email: string;
}
