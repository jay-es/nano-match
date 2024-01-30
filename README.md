# nano-match 🎯

`nano-match` is a tiny utility simplifying key-based matching in TypeScript, bringing elegance to your code.

## Installation 🚀

```bash
npm install @jay-es/nano-match
```

## Usage 🛠

### match ✨

```typescript
import { match } from '@jay-es/nano-match';

type Language = 'en' | 'es' | 'fr';

const lang: Language = 'en';

// Strict matching, only allows valid keys of type 'Language'.
const greeting = match(lang, {
  en: "Hello.",
  es: "Hola.",
  fr: "Bonjour.",
});

console.log(greeting); // Output: Hello. (Type: "Hello." | "Hola." | "Bonjour.")
```

## Type Safety 🛡

- `match` enforces type safety by allowing only valid keys. It ensures that the provided key is of the specified type.

```typescript
// Compilation error: 'de' is not a valid key of type 'Language'.
const strictGreeting = match('de', {
  en: "Hello.",
  es: "Hola.",
  fr: "Bonjour.",
});
```

### Additional Example 🚀

```typescript
// Using `match` with numeric keys
const message = match(200, {
  200: "OK",
  404: "Not Found",
  500: "Internal Server Error",
});

console.log(message); // Output: OK (Type: "OK" | "Not Found" | "Internal Server Error")
```

## Additional Feature 🌟

`nano-match` also provides the following function:

### looseMatch 🎈

As an additional feature, `looseMatch` allows for more flexible matching that accepts keys outside the specified type, returning `undefined` for keys that do not match.

```typescript
import { looseMatch } from '@jay-es/nano-match';

// Loose matching, allows keys outside the specified type, returning undefined for non-matching keys.
const nonMatchingKey: string = 'de';
const looseGreeting = looseMatch(nonMatchingKey, {
  en: "Hello.",
  es: "Hola.",
  fr: "Bonjour.",
});

console.log(looseGreeting); // Output: undefined (Type: "Hello." | "Hola." | "Bonjour." | undefined)
```

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
