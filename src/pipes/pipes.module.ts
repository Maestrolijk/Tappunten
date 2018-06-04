import { NgModule } from '@angular/core';
import { SafePipe } from './safe-html/safe-html';
@NgModule({
	declarations: [SafePipe],
	imports: [],
	exports: [SafePipe]
})
export class PipesModule {}
