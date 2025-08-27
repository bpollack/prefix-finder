/**
 * A trie-based data structure for finding minimal unique prefixes of strings.
 */
export class PrefixFinder {
  /** Count of words that pass through this node */
  #count = 0;
  /** Map of characters to child nodes */
  #letters = new Map<string, PrefixFinder>();

  /**
   * Adds a word to the trie.
   * @param s - The string to add
   */
  addWord(s: string): void {
    if (s.length === 0) return;
    this.#count++;
    const c = s[0];
    if (!this.#letters.has(c)) this.#letters.set(c, new PrefixFinder());
    this.#letters.get(c)!.addWord(s.slice(1));
  }

  /**
   * Finds the minimal unique prefix for a given string.
   * @param s - The string to find the prefix for
   * @returns The minimal unique prefix
   * @throws {Error} When the string is empty or not found in the trie
   */
  prefixFor(s: string): string {
    if (s.length === 0) throw new Error("string cannot be empty");
    let node: PrefixFinder | undefined;
    node = this;
    for (let ix = 0; ix < s.length && node != null; ix++) {
      const c = s[ix];
      node = node.#letters.get(c);
      if (node == null) throw new Error(`string ${s} not found in trie`);
      if (node.#count === 1) return s.slice(0, ix + 1);
    }
    return s;
  }
}
