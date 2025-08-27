export class PrefixFinder {
  #count = 0;
  #letters = new Map<string, PrefixFinder>();

  addWord(s: string): void {
    if (s.length === 0) return;
    this.#count++;
    const c = s[0];
    if (!this.#letters.has(c)) this.#letters.set(c, new PrefixFinder());
    this.#letters.get(c)!.addWord(s.slice(1));
  }

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
