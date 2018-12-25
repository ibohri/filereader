import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailFormatDialog } from "./email-format.component";

describe("EmailFormatComponent", () => {
  let component: EmailFormatDialog;
  let fixture: ComponentFixture<EmailFormatDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFormatDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
