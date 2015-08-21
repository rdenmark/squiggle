module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { ReplStart: 2, Script: 1 },
        peg$startRuleIndex   = 2,

        peg$consts = [
          peg$FAILED,
          "export",
          { type: "literal", value: "export", description: "\"export\"" },
          function(e) { return ast.Module(e); },
          function(e) { return ast.Script(e); },
          ":set",
          { type: "literal", value: ":set", description: "\":set\"" },
          function(b) { return ast.ReplBinding(b); },
          ":help",
          { type: "literal", value: ":help", description: "\":help\"" },
          function() { return ast.ReplHelp(); },
          ":quit",
          { type: "literal", value: ":quit", description: "\":quit\"" },
          function() { return ast.ReplQuit(); },
          function(e) { return ast.ReplExpression(e); },
          "if",
          { type: "literal", value: "if", description: "\"if\"" },
          "else",
          { type: "literal", value: "else", description: "\"else\"" },
          "let",
          { type: "literal", value: "let", description: "\"let\"" },
          "in",
          { type: "literal", value: "in", description: "\"in\"" },
          "do",
          { type: "literal", value: "do", description: "\"do\"" },
          "match",
          { type: "literal", value: "match", description: "\"match\"" },
          "case",
          { type: "literal", value: "case", description: "\"case\"" },
          "true",
          { type: "literal", value: "true", description: "\"true\"" },
          "false",
          { type: "literal", value: "false", description: "\"false\"" },
          "undefined",
          { type: "literal", value: "undefined", description: "\"undefined\"" },
          "null",
          { type: "literal", value: "null", description: "\"null\"" },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          [],
          ";",
          { type: "literal", value: ";", description: "\";\"" },
          function(e) { return e; },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(es) { return ast.Block(es); },
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(p, t, f) { return ast.If(p, t, f); },
          function(b, e) { return ast.Let(b, e); },
          function(e, b) { return ast.Match(e, b); },
          "=>",
          { type: "literal", value: "=>", description: "\"=>\"" },
          function(p, e) { return ast.MatchClause(p, e); },
          function(x) { return ast.MatchPatternLiteral(x); },
          function(i) { return ast.MatchPatternSimple(i); },
          "[",
          { type: "literal", value: "[", description: "\"[\"" },
          null,
          "]",
          { type: "literal", value: "]", description: "\"]\"" },
          function(ps) { return ast.MatchPatternArray(ps || []); },
          ",",
          { type: "literal", value: ",", description: "\",\"" },
          function(pp) { return pp; },
          function(p, ps) { return cons(p, ps); },
          function(ps) { return ast.MatchPatternObject(ps || []); },
          ":",
          { type: "literal", value: ":", description: "\":\"" },
          function(k, v) { return ast.MatchPatternObjectPair(k, v); },
          function(i) {
                  return ast.MatchPatternObjectPair(
                      ast.String(i.data),
                      ast.MatchPatternSimple(i)
                  );
              },
          function(b2) { return b2; },
          function(b, bs) { return [b].concat(bs); },
          "=",
          { type: "literal", value: "=", description: "\"=\"" },
          function(i, e) { return ast.Binding(i, e); },
          "|>",
          { type: "literal", value: "|>", description: "\"|>\"" },
          "and",
          { type: "literal", value: "and", description: "\"and\"" },
          "or",
          { type: "literal", value: "or", description: "\"or\"" },
          ">=",
          { type: "literal", value: ">=", description: "\">=\"" },
          "<=",
          { type: "literal", value: "<=", description: "\"<=\"" },
          "<",
          { type: "literal", value: "<", description: "\"<\"" },
          ">",
          { type: "literal", value: ">", description: "\">\"" },
          "!=",
          { type: "literal", value: "!=", description: "\"!=\"" },
          "++",
          { type: "literal", value: "++", description: "\"++\"" },
          "+",
          { type: "literal", value: "+", description: "\"+\"" },
          "-",
          { type: "literal", value: "-", description: "\"-\"" },
          "*",
          { type: "literal", value: "*", description: "\"*\"" },
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(o, b) { return [o, b]; },
          function(a, xs) { return lbo(a, xs); },
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          function(i) { return i; },
          function(e, xs) { return foldLeft(ast.GetProperty, e, xs); },
          "::",
          { type: "literal", value: "::", description: "\"::\"" },
          function(e, xs) { return foldLeft(ast.GetMethod, e, xs); },
          function(i, xs) { return [i, xs || []]; },
          function(e, calls) {
                  return foldLeft(function(acc, call) {
                      return ast.CallMethod(acc, call[0], call[1]);
                  }, e, calls);
              },
          function(xs) { return xs || []; },
          function(e, calls) { return foldLeft(ast.Call, e, calls); },
          { type: "other", description: "literal" },
          function(i) { return ast.IdentifierExpression(i); },
          { type: "other", description: "function" },
          "fn",
          { type: "literal", value: "fn", description: "\"fn\"" },
          function(p, e) { return ast.Function(p || [], e); },
          function(p2) { return p2; },
          function(p, ps) { return [p].concat(ps); },
          function(i) { return ast.Parameter(i); },
          { type: "other", description: "parenthesized-expression" },
          { type: "other", description: "list" },
          function(xs) { return ast.List(xs || []); },
          function(e2) { return e2; },
          function(e, es) { return [e].concat(es); },
          { type: "other", description: "map" },
          function(xs) { return ast.Map(xs || []); },
          function(k, v) { return ast.Pair(k, v); },
          function(i) { return ast.Pair(ast.String(i.data), i); },
          { type: "other", description: "identifier" },
          /^[_a-zA-Z]/,
          { type: "class", value: "[_a-zA-Z]", description: "[_a-zA-Z]" },
          /^[_a-zA-Z0-9]/,
          { type: "class", value: "[_a-zA-Z0-9]", description: "[_a-zA-Z0-9]" },
          function(i) { return ast.Identifier(i); },
          { type: "other", description: "true" },
          function() { return ast.True(); },
          { type: "other", description: "false" },
          function() { return ast.False(); },
          { type: "other", description: "undefined" },
          function() { return ast.Undefined(); },
          { type: "other", description: "null" },
          function() { return ast.Null(); },
          { type: "other", description: "number" },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          function(n) { return ast.Number(+n); },
          { type: "other", description: "string" },
          "\"",
          { type: "literal", value: "\"", description: "\"\\\"\"" },
          /^[^"\n]/,
          { type: "class", value: "[^\"\\n]", description: "[^\"\\n]" },
          function(s) { return ast.String(s); },
          { type: "other", description: "whitespace" },
          /^[ \t]/,
          { type: "class", value: "[ \\t]", description: "[ \\t]" },
          { type: "other", description: "newline" },
          /^[\n]/,
          { type: "class", value: "[\\n]", description: "[\\n]" },
          { type: "other", description: "comment" },
          "#",
          { type: "literal", value: "#", description: "\"#\"" },
          void 0,
          { type: "any", description: "any character" }
        ],

        peg$bytecode = [
          peg$decode("!7Y+V$.!\"\"2!3\"+F%7Y+<%7$+2%7Y+(%4%6#%!!%$%#  $$#  $##  $\"#  \"#  *# \"7!"),
          peg$decode("!7Y+<$7$+2%7Y+(%4#6$#!!%$##  $\"#  \"#  "),
          peg$decode("!7Y+V$.%\"\"2%3&+F%7Y+<%74+2%7Y+(%4%6'%!!%$%#  $$#  $##  $\"#  \"#  *\xA5 \"!7Y+A$.(\"\"2(3)+1%7Y+'%4#6*# %$##  $\"#  \"#  *v \"!7Y+A$.+\"\"2+3,+1%7Y+'%4#6-# %$##  $\"#  \"#  *G \"!7Y+<$7$+2%7Y+(%4#6.#!!%$##  $\"#  \"#  "),
          peg$decode("./\"\"2/30*\xA1 \".1\"\"2132*\x95 \".3\"\"2334*\x89 \".5\"\"2536*} \".7\"\"2738*q \".9\"\"293:*e \".;\"\"2;3<*Y \".=\"\"2=3>*M \".?\"\"2?3@*A \".A\"\"2A3B*5 \".C\"\"2C3D*) \".!\"\"2!3\""),
          peg$decode("!.7\"\"2738+\xD3$7Y+\xC9%.E\"\"2E3F+\xB9%7Y+\xAF% G!7$+B$.H\"\"2H3I+2%7Y+(%4#6J#!\"%$##  $\"#  \"#  +P$,M&!7$+B$.H\"\"2H3I+2%7Y+(%4#6J#!\"%$##  $\"#  \"#  \"\"\"  +B%.K\"\"2K3L+2%7Y+(%4'6M'!\"%$'#  $&#  $%#  $$#  $##  $\"#  \"#  *# \"7%"),
          peg$decode("!./\"\"2/30+\xA0$7Y+\x96%.N\"\"2N3O+\x86%7Y+|%7;+r%.P\"\"2P3Q+b%7Y+X%7$+N%.1\"\"2132+>%7Y+4%7$+*%4+6R+#&# %$+#  $*#  $)#  $(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  *# \"7&"),
          peg$decode("!.3\"\"2334+{$7Y+q%.N\"\"2N3O+a%7Y+W%73+M%.P\"\"2P3Q+=%7Y+3%7$+)%4(6S(\"# %$(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  *) \"7'*# \"7;"),
          peg$decode("!.9\"\"293:+\xBE$7Y+\xB4%.N\"\"2N3O+\xA4%7Y+\x9A%7$+\x90%.P\"\"2P3Q+\x80%7Y+v%.E\"\"2E3F+f%7Y+\\% G7(+&$,#&7(\"\"\"  +C%.K\"\"2K3L+3%7Y+)%4,6T,\"'\"%$,#  $+#  $*#  $)#  $(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!.;\"\"2;3<+a$7Y+W%7)+M%.U\"\"2U3V+=%7Y+3%7$+)%4&6W&\"# %$&#  $%#  $$#  $##  $\"#  \"#  "),
          peg$decode("7**# \"7+"),
          peg$decode("7,*# \"7-"),
          peg$decode("7.*# \"70"),
          peg$decode("!7W*) \"7X*# \"7V+' 4!6X!! %"),
          peg$decode("!7Q+' 4!6Y!! %"),
          peg$decode("!.Z\"\"2Z3[+\\$7Y+R%7/*# \" \\+B%.]\"\"2]3^+2%7Y+(%4%6_%!\"%$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!7)+\x8F$ G!.`\"\"2`3a+<$7Y+2%7)+(%4#6b#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%7)+(%4#6b#! %$##  $\"#  \"#  \"+)%4\"6c\"\"! %$\"#  \"#  "),
          peg$decode("!.E\"\"2E3F+\\$7Y+R%71*# \" \\+B%.K\"\"2K3L+2%7Y+(%4%6d%!\"%$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!72+\x8F$ G!.`\"\"2`3a+<$7Y+2%72+(%4#6b#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%72+(%4#6b#! %$##  $\"#  \"#  \"+)%4\"6c\"\"! %$\"#  \"#  "),
          peg$decode("!7X+M$.e\"\"2e3f+=%7Y+3%7)+)%4$6g$\"# %$$#  $##  $\"#  \"#  */ \"!7Q+' 4!6h!! %"),
          peg$decode("!74+\x8F$ G!.`\"\"2`3a+<$7Y+2%74+(%4#6i#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%74+(%4#6i#! %$##  $\"#  \"#  \"+)%4\"6j\"\"! %$\"#  \"#  "),
          peg$decode("!7Q+M$.k\"\"2k3l+=%7Y+3%7$+)%4$6m$\"# %$$#  $##  $\"#  \"#  "),
          peg$decode(".n\"\"2n3o"),
          peg$decode(".p\"\"2p3q*) \".r\"\"2r3s"),
          peg$decode(".t\"\"2t3u*Y \".v\"\"2v3w*M \".x\"\"2x3y*A \".z\"\"2z3{*5 \".k\"\"2k3l*) \".|\"\"2|3}"),
          peg$decode(".~\"\"2~3"),
          peg$decode(".\x80\"\"2\x803\x81*) \".\x82\"\"2\x823\x83"),
          peg$decode(".\x84\"\"2\x843\x85*) \".\x86\"\"2\x863\x87"),
          peg$decode("!7<+\x85$ G!75+=$7Y+3%7<+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!75+=$7Y+3%7<+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7=+\x85$ G!76+=$7Y+3%7=+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!76+=$7Y+3%7=+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7>+\x85$ G!77+=$7Y+3%7>+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!77+=$7Y+3%7>+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7?+\x85$ G!78+=$7Y+3%7?+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!78+=$7Y+3%7?+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7@+\x85$ G!79+=$7Y+3%7@+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!79+=$7Y+3%7@+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7A+\x85$ G!7:+=$7Y+3%7A+)%4#6\x88#\"\" %$##  $\"#  \"#  ,H&!7:+=$7Y+3%7A+)%4#6\x88#\"\" %$##  $\"#  \"#  \"+)%4\"6\x89\"\"! %$\"#  \"#  "),
          peg$decode("!7B+\u0123$ G!.\x8A\"\"2\x8A3\x8B+<$7Y+2%7Q+(%4#6\x8C#! %$##  $\"#  \"#  *g \"!.Z\"\"2Z3[+V$7Y+L%7$+B%.]\"\"2]3^+2%7Y+(%4%6\x8C%!\"%$%#  $$#  $##  $\"#  \"#  ,\x97&!.\x8A\"\"2\x8A3\x8B+<$7Y+2%7Q+(%4#6\x8C#! %$##  $\"#  \"#  *g \"!.Z\"\"2Z3[+V$7Y+L%7$+B%.]\"\"2]3^+2%7Y+(%4%6\x8C%!\"%$%#  $$#  $##  $\"#  \"#  \"+)%4\"6\x8D\"\"! %$\"#  \"#  "),
          peg$decode("!7C+\x8F$ G!.\x8E\"\"2\x8E3\x8F+<$7Y+2%7Q+(%4#6\x8C#! %$##  $\"#  \"#  ,M&!.\x8E\"\"2\x8E3\x8F+<$7Y+2%7Q+(%4#6\x8C#! %$##  $\"#  \"#  \"+)%4\"6\x90\"\"! %$\"#  \"#  "),
          peg$decode("!7D+\u0119$ G!.\x8A\"\"2\x8A3\x8B+\x81$7Y+w%7Q+m%.N\"\"2N3O+]%7Y+S%7M*# \" \\+C%.P\"\"2P3Q+3%7Y+)%4(6\x91(\"%\"%$(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  ,\x92&!.\x8A\"\"2\x8A3\x8B+\x81$7Y+w%7Q+m%.N\"\"2N3O+]%7Y+S%7M*# \" \\+C%.P\"\"2P3Q+3%7Y+)%4(6\x91(\"%\"%$(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  \"+)%4\"6\x92\"\"! %$\"#  \"#  "),
          peg$decode("!7E+\xCF$ G!.N\"\"2N3O+\\$7Y+R%7M*# \" \\+B%.P\"\"2P3Q+2%7Y+(%4%6\x93%!\"%$%#  $$#  $##  $\"#  \"#  ,m&!.N\"\"2N3O+\\$7Y+R%7M*# \" \\+B%.P\"\"2P3Q+2%7Y+(%4%6\x93%!\"%$%#  $$#  $##  $\"#  \"#  \"+)%4\"6\x94\"\"! %$\"#  \"#  "),
          peg$decode("7F*; \"7L*5 \"7N*/ \"7H*) \"7G*# \"7K"),
          peg$decode("87W*; \"7X*5 \"7R*/ \"7S*) \"7T*# \"7U9*\" 3\x95"),
          peg$decode("!7Q+' 4!6\x96!! %"),
          peg$decode("8!.\x98\"\"2\x983\x99+\x81$7Y+w%.N\"\"2N3O+g%7Y+]%7I*# \" \\+M%.P\"\"2P3Q+=%7Y+3%7$+)%4(6\x9A(\"# %$(#  $'#  $&#  $%#  $$#  $##  $\"#  \"#  9*\" 3\x97"),
          peg$decode("!7J+\x8F$ G!.`\"\"2`3a+<$7Y+2%7J+(%4#6\x9B#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%7J+(%4#6\x9B#! %$##  $\"#  \"#  \"+)%4\"6\x9C\"\"! %$\"#  \"#  "),
          peg$decode("!7Q+' 4!6\x9D!! %"),
          peg$decode("8!.N\"\"2N3O+V$7Y+L%7$+B%.P\"\"2P3Q+2%7Y+(%4%6J%!\"%$%#  $$#  $##  $\"#  \"#  9*\" 3\x9E"),
          peg$decode("8!.Z\"\"2Z3[+\\$7Y+R%7M*# \" \\+B%.]\"\"2]3^+2%7Y+(%4%6\xA0%!\"%$%#  $$#  $##  $\"#  \"#  9*\" 3\x9F"),
          peg$decode("!7$+\x8F$ G!.`\"\"2`3a+<$7Y+2%7$+(%4#6\xA1#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%7$+(%4#6\xA1#! %$##  $\"#  \"#  \"+)%4\"6\xA2\"\"! %$\"#  \"#  "),
          peg$decode("8!.E\"\"2E3F+\\$7Y+R%7O*# \" \\+B%.K\"\"2K3L+2%7Y+(%4%6\xA4%!\"%$%#  $$#  $##  $\"#  \"#  9*\" 3\xA3"),
          peg$decode("!7P+\x8F$ G!.`\"\"2`3a+<$7Y+2%7P+(%4#6\x9B#! %$##  $\"#  \"#  ,M&!.`\"\"2`3a+<$7Y+2%7P+(%4#6\x9B#! %$##  $\"#  \"#  \"+)%4\"6\x9C\"\"! %$\"#  \"#  "),
          peg$decode("!7$+M$.e\"\"2e3f+=%7Y+3%7$+)%4$6\xA5$\"# %$$#  $##  $\"#  \"#  */ \"!7Q+' 4!6\xA6!! %"),
          peg$decode("8!!!0\xA8\"\"1!3\xA9+A$ G0\xAA\"\"1!3\xAB,)&0\xAA\"\"1!3\xAB\"+#%'\"%$\"#  \"#  +! (%+2$7Y+(%4\"6\xAC\"!!%$\"#  \"#  9*\" 3\xA7"),
          peg$decode("8!.=\"\"2=3>+1$7Y+'%4\"6\xAE\" %$\"#  \"#  9*\" 3\xAD"),
          peg$decode("8!.?\"\"2?3@+1$7Y+'%4\"6\xB0\" %$\"#  \"#  9*\" 3\xAF"),
          peg$decode("8!.A\"\"2A3B+1$7Y+'%4\"6\xB2\" %$\"#  \"#  9*\" 3\xB1"),
          peg$decode("8!.C\"\"2C3D+1$7Y+'%4\"6\xB4\" %$\"#  \"#  9*\" 3\xB3"),
          peg$decode("7R*/ \"7S*) \"7T*# \"7U"),
          peg$decode("8!! G0\xB6\"\"1!3\xB7+,$,)&0\xB6\"\"1!3\xB7\"\"\"  +! (%+2$7Y+(%4\"6\xB8\"!!%$\"#  \"#  9*\" 3\xB5"),
          peg$decode("8!.\xBA\"\"2\xBA3\xBB+m$! G0\xBC\"\"1!3\xBD+,$,)&0\xBC\"\"1!3\xBD\"\"\"  +! (%+B%.\xBA\"\"2\xBA3\xBB+2%7Y+(%4$6\xBE$!\"%$$#  $##  $\"#  \"#  9*\" 3\xB9"),
          peg$decode(" G7Z*) \"7[*# \"7\\,/&7Z*) \"7[*# \"7\\\""),
          peg$decode("8 G0\xC0\"\"1!3\xC1+,$,)&0\xC0\"\"1!3\xC1\"\"\"  9*\" 3\xBF"),
          peg$decode("8 G0\xC3\"\"1!3\xC4+,$,)&0\xC3\"\"1!3\xC4\"\"\"  9*\" 3\xC2"),
          peg$decode("8!.\xC6\"\"2\xC63\xC7+\x8F$ G!!87[9*$$\"\" \xC8\"#  +2$-\"\"1!3\xC9+#%'\"%$\"#  \"#  ,K&!!87[9*$$\"\" \xC8\"#  +2$-\"\"1!3\xC9+#%'\"%$\"#  \"#  \"+-%7[+#%'#%$##  $\"#  \"#  9*\" 3\xC5")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$cache = {},
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      var key    = peg$currPos * 61 + index,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: stack[0] };

      return stack[0];
    }


        // Yikes... what a horrible import path.
        var ast = require("../src/ast");

        function foldLeft(f, z, xs) {
            return xs.reduce(function(acc, x) {
                return f(acc, x);
            }, z);
        }

        function cons(x, xs) {
            return [x].concat(xs);
        }

        // Left-associative binary operator helper.
        function lbo(a, xs) {
            return foldLeft(function(acc, pair) {
                return ast.BinOp(ast.Operator(pair[0]), acc, pair[1]);
            }, a, xs);
        }


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
