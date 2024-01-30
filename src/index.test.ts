import { match, looseMatch } from "./index";
import { describe, test, expect } from "vitest";

describe("match function", () => {
  test("strict matching", () => {
    const result: "Hello." | "Hola." | "Bonjour." = match("en", {
      en: "Hello.",
      es: "Hola.",
      fr: "Bonjour.",
    });

    expect(result).toBe("Hello.");
  });

  test("strict matching with invalid key", () => {
    // @ts-ignore
    const result = match("de", {
      en: "Hello.",
      es: "Hola.",
      fr: "Bonjour.",
    });

    expect(result).toBeUndefined();
  });
});

describe("looseMatch function", () => {
  test("loose matching", () => {
    const result: "Hello." | "Hola." | "Bonjour." | undefined = looseMatch(
      "en",
      {
        en: "Hello.",
        es: "Hola.",
        fr: "Bonjour.",
      },
    );

    expect(result).toBe("Hello.");
  });

  test("loose matching with invalid key", () => {
    const result: "Hello." | "Hola." | "Bonjour." | undefined = looseMatch(
      "de",
      {
        en: "Hello.",
        es: "Hola.",
        fr: "Bonjour.",
      },
    );

    expect(result).toBeUndefined();
  });
});
