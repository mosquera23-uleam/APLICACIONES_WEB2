import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cocinero } from '../../cocinero/entities/cocinero.entity';
import { Receta } from '../../receta/entities/receta.entity';

@ObjectType()
@Entity()
export class Preparacion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fecha: Date;

  @Field()
  @Column()
  hora: string;

  @Field()
  @Column('decimal')
  costo: number;

  @Field()
  @Column('int')
  tiempoEstimado: number;

  @Field()
  @Column('boolean', { default: true })
  estado: boolean;

  @Field(() => Cocinero)
  @ManyToOne(() => Cocinero, (cocinero) => cocinero.preparaciones)
  cocinero: Cocinero;

  @Field(() => Receta)
  @ManyToOne(() => Receta, (receta) => receta.preparaciones)
  receta: Receta;
}
