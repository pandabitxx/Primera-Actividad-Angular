import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeContenidoComponent } from './area-de-contenido.component';

describe('AreaDeContenidoComponent', () => {
  let component: AreaDeContenidoComponent;
  let fixture: ComponentFixture<AreaDeContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDeContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
