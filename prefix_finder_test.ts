import { assertEquals, assertThrows } from "@std/assert";
import { PrefixFinder } from "./prefix_finder.ts";

Deno.test("ensure the trie works for basic use cases", () => {
  const t = new PrefixFinder();
  t.addWord("hello");
  assertEquals(t.prefixFor("hello"), "h");
  assertThrows(() => {
    t.prefixFor("spatula");
  });
  t.addWord("spatula");
  assertEquals(t.prefixFor("spatula"), "s");
  t.addWord("speculum");
  t.addWord("hella");
  t.addWord("hep");
  t.addWord("hop");
  assertEquals(t.prefixFor("spatula"), "spa");
  assertEquals(t.prefixFor("speculum"), "spe");
  assertEquals(t.prefixFor("hello"), "hello");
  assertEquals(t.prefixFor("hella"), "hella");
  assertEquals(t.prefixFor("hep"), "hep");
  assertEquals(t.prefixFor("hop"), "ho");
  assertThrows(() => {
    t.prefixFor("hellop");
  });
});
