webpackJsonp([246],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-seeded-s-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.SeededS.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Hashtbl.S.html" title="MoreLabels.Hashtbl.S">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_MoreLabels.Hashtbl.SeededS.html">MoreLabels.Hashtbl.SeededS</a></h1>\n\n<pre><span class="keyword">module</span> type SeededS = sig .. end</pre><hr width="100%">\n\n<pre id="TYPEkey"><span class="keyword">type</span> key;\n</pre>\n\n\n<pre id="TYPEt"><span class="keyword">type</span> t(&apos;a);\n</pre>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: (~random: bool=?, int) =&gt; t(&apos;a);\n</pre>\n<pre id="VALclear"><span class="keyword">let</span> clear: t(&apos;a) =&gt; unit;\n</pre>\n<pre id="VALreset"><span class="keyword">let</span> reset: t(&apos;a) =&gt; unit;\n</pre>\n<pre id="VALcopy"><span class="keyword">let</span> copy: t(&apos;a) =&gt; t(&apos;a);\n</pre>\n<pre id="VALadd"><span class="keyword">let</span> add: (t(&apos;a), ~key: key, ~data: &apos;a) =&gt; unit;\n</pre>\n<pre id="VALremove"><span class="keyword">let</span> remove: (t(&apos;a), key) =&gt; unit;\n</pre>\n<pre id="VALfind"><span class="keyword">let</span> find: (t(&apos;a), key) =&gt; &apos;a;\n</pre>\n<pre id="VALfind_all"><span class="keyword">let</span> find_all: (t(&apos;a), key) =&gt; list(&apos;a);\n</pre>\n<pre id="VALreplace"><span class="keyword">let</span> replace: (t(&apos;a), ~key: key, ~data: &apos;a) =&gt; unit;\n</pre>\n<pre id="VALmem"><span class="keyword">let</span> mem: (t(&apos;a), key) =&gt; bool;\n</pre>\n<pre id="VALiter"><span class="keyword">let</span> iter: (~f: (~key: key, ~data: &apos;a) =&gt; unit, t(&apos;a)) =&gt; unit;\n</pre>\n<pre id="VALfold"><span class="keyword">let</span> fold: (~f: (~key: key, ~data: &apos;a, &apos;b) =&gt; &apos;b, t(&apos;a), ~init: &apos;b) =&gt; &apos;b;\n</pre>\n<pre id="VALlength"><span class="keyword">let</span> length: t(&apos;a) =&gt; int;\n</pre>\n<pre id="VALstats"><span class="keyword">let</span> stats: t(&apos;a) =&gt; MoreLabels.Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.SeededS.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-seeded-s-html-d8d04851d22419feade1.js.map