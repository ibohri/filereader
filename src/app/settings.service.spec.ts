import { TestBed, inject } from "@angular/core/testing";

import { EmailSettingsService } from "./settings.service";

describe("SettingsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailSettingsService]
    });
  });

  it("should be created", inject(
    [EmailSettingsService],
    (service: EmailSettingsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
