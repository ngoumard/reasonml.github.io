webpackJsonp([290],{"./node_modules/json-loader/index.js!./.cache/json/api-char-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Char.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="CamlinternalOO.html" title="CamlinternalOO">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Complex.html" title="Complex">Next</a>\n</div>\n<h1>Module <a href="type_Char.html">Char</a></h1>\n\n<pre><span class="keyword">module</span> Char: sig .. end</pre><div class="info module top">\nCharacter operations.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> code: char =&gt; int;\n</pre><div class="info ">\nReturn the ASCII code of the argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> chr: int =&gt; char;\n</pre><div class="info ">\nReturn the character with the given ASCII code.\n   Raise <code class="code">Invalid_argument &quot;Char.chr&quot;</code> if the argument is\n   outside the range 0--255.<br>\n</div>\n\n<pre><span class="keyword">let</span> escaped: char =&gt; string;\n</pre><div class="info ">\nReturn a string representing the given character,\n   with special characters escaped following the lexical conventions\n   of OCaml.<br>\n</div>\n\n<pre><span class="keyword">let</span> lowercase: char =&gt; char;\n</pre><div class="info ">\nConvert the given character to its equivalent lowercase character.<br>\n</div>\n\n<pre><span class="keyword">let</span> uppercase: char =&gt; char;\n</pre><div class="info ">\nConvert the given character to its equivalent uppercase character.<br>\n</div>\n\n<pre><span class="keyword">type</span> t = char;\n</pre>\n<div class="info ">\nAn alias for the type of characters.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for characters, with the same specification as\n    <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.  Along with the type <code class="code">t</code>, this function <code class="code">compare</code>\n    allows the module <code class="code">Char</code> to be passed as argument to the functors\n    <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Char.html"}}}});
//# sourceMappingURL=path---api-char-html-c71bc61acd98b04878a6.js.map