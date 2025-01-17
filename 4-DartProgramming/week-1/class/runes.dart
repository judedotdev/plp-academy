// definition of rune: A rune is a term used in programming to represent a single Unicode character. The concept of a rune is especially prominent in languages like Go, where a rune is an alias for the int32 data type and is used to hold Unicode code points.
// A rune can be defined as an integer used to represent any Unicode code point. As a Dart string is a simple sequence of UTF-16 code units, 32-bit Unicode values in a string are represented using a special syntax.
// Every symbol, letter, or emoji you use in Dart has a unique Unicode code point.

void main() {
  // 🧙‍♀️ Summon emojis and symbols using runes
  Runes magicRunes = Runes('\u2764\u1F60A\u1F680'); // ❤️😊🚀

  // 🔮 Decoding the rune spell into a readable string
  String castedMagic = String.fromCharCodes(magicRunes);

  // 🔮 Output the magic!
  print("✨ Casting runes: $castedMagic");

  var heart_symbol = '\u2665';
  var laugh_symbol = '\u{1f800}';
  print(heart_symbol);
  print(laugh_symbol);

  var heart = '💖';
  print(heart.runes); // Output: (128150)
}
