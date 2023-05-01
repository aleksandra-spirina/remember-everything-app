import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CardEntity } from './entity/card.entity';

@Controller()
export class AppController {
  constructor(private dbService: InMemoryDBService<any>) { }

  @Get()
	getAll(): CardEntity[] {
		return this.dbService.getAll();
	}

	@Post()
	async create(@Body() dto: Partial<CardEntity>): Promise<CardEntity> {
		return this.dbService.create(dto);
	}

	@Post('seed')
	seed(): CardEntity[] {
		this.dbService.seed(
			(idx: number) => ({
				term: `Term ${idx + 1}`,
				definition: `Definition ${idx + 1}`,
				flipped: false
			}),
			5
		);
		return this.dbService.getAll();
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
			await this.dbService.delete(id);
	}
}
