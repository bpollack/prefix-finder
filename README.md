# Prefix Finder

A TypeScript/Deno library that implements a trie data structure to find the
shortest unique prefix for words in a given set.

## Overview

The `PrefixFinder` class uses a trie to efficiently find the minimum prefix
needed to uniquely identify a word among all words added to the structure. This
is useful for auto-completion systems, command disambiguation, and other
applications where you need the shortest unambiguous prefix.

## Usage

```typescript
import { PrefixFinder } from "./prefix_finder.ts";

const finder = new PrefixFinder();

// Add words to the trie
finder.addWord("hello");
finder.addWord("help");
finder.addWord("world");

// Get shortest unique prefixes
finder.prefixFor("hello"); // Returns "hel"
finder.prefixFor("help"); // Returns "hel" + "p" = "help"
finder.prefixFor("world"); // Returns "w"
```

## API

### `addWord(word: string): void`

Adds a word to the trie. Empty strings are ignored.

### `prefixFor(word: string): string`

Returns the shortest prefix that uniquely identifies the given word among all
words in the trie.

**Throws:**

- `Error` if the word is empty
- `Error` if the word was not previously added to the trie

## Development

This project uses Deno. To run tests:

```bash
deno test
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
