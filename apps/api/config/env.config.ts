import { IsInt, IsNotEmpty, IsString, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

class Environment {
  @IsNotEmpty() /* decorador que viene de class validator */
  @IsString()
  DATABASE_HOST: string;

  @IsNotEmpty()
  @IsInt()
  DATABASE_PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_NAME: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_USERNAME: string;
}

export function validate(config: Record<string, unknown>) {
  
  const validated = plainToClass(Environment, config, {
    enableImplicitConversion: true
  });

  const errors = validateSync(validated, {
    skipMissingProperties: false
  })

  if(errors.length > 0){
    throw new Error(errors.toString())
  }

  return validated
}
