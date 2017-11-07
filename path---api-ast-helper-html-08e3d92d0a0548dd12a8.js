webpackJsonp([324],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-helper-html.json":function(s,n){s.exports={data:{file:{relativePath:"api/Ast_helper.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Weak.html" title="Weak">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Ast_mapper.html" title="Ast_mapper">Next</a>\n</div>\n<h1>Module <a href="type_Ast_helper.html">Ast_helper</a></h1>\n\n<pre><span class="keyword">module</span> Ast_helper: sig .. end</pre><div class="info module top">\nHelpers to produce Parsetree fragments<br>\n</div>\n<hr width="100%">\n\n<pre id="TYPElid"><span class="keyword">type</span> lid = Asttypes.loc(Longident.t);\n</pre>\n\n\n<pre id="TYPEstr"><span class="keyword">type</span> str = Asttypes.loc(string);\n</pre>\n\n\n<pre id="TYPEloc"><span class="keyword">type</span> loc = Location.t;\n</pre>\n\n\n<pre id="TYPEattrs"><span class="keyword">type</span> attrs = list(Parsetree.attribute);\n</pre>\n\n<br>\n<h2 id="2_Defaultlocations">Default locations</h2><br>\n\n<pre id="VALdefault_loc"><span class="keyword">let</span> default_loc: Pervasives.ref(loc);\n</pre><div class="info ">\nDefault value for all optional location arguments.<br>\n</div>\n\n<pre id="VALwith_default_loc"><span class="keyword">let</span> with_default_loc: (loc, unit =&gt; &apos;a) =&gt; &apos;a;\n</pre><div class="info ">\nSet the <code class="code">default_loc</code> within the scope of the execution\n        of the provided function.<br>\n</div>\n<br>\n<h2 id="2_Corelanguage">Core language</h2><br>\n\n<pre><span class="keyword">module</span> Typ: sig .. end</pre><div class="info">\nType expressions\n</div>\n\n<pre><span class="keyword">module</span> Pat: sig .. end</pre><div class="info">\nPatterns\n</div>\n\n<pre><span class="keyword">module</span> Exp: sig .. end</pre><div class="info">\nExpressions\n</div>\n\n<pre><span class="keyword">module</span> Val: sig .. end</pre><div class="info">\nValue declarations\n</div>\n\n<pre><span class="keyword">module</span> Type: sig .. end</pre><div class="info">\nType declarations\n</div>\n\n<pre><span class="keyword">module</span> Te: sig .. end</pre><div class="info">\nType extensions\n</div>\n<br>\n<h2 id="2_Modulelanguage">Module language</h2><br>\n\n<pre><span class="keyword">module</span> Mty: sig .. end</pre><div class="info">\nModule type expressions\n</div>\n\n<pre><span class="keyword">module</span> Mod: sig .. end</pre><div class="info">\nModule expressions\n</div>\n\n<pre><span class="keyword">module</span> Sig: sig .. end</pre><div class="info">\nSignature items\n</div>\n\n<pre><span class="keyword">module</span> Str: sig .. end</pre><div class="info">\nStructure items\n</div>\n\n<pre><span class="keyword">module</span> Md: sig .. end</pre><div class="info">\nModule declarations\n</div>\n\n<pre><span class="keyword">module</span> Mtd: sig .. end</pre><div class="info">\nModule type declarations\n</div>\n\n<pre><span class="keyword">module</span> Mb: sig .. end</pre><div class="info">\nModule bindings\n</div>\n\n<pre><span class="keyword">module</span> Opn: sig .. end</pre>\n<pre><span class="keyword">module</span> Incl: sig .. end</pre><br>\nValue bindings<br>\n\n<pre><span class="keyword">module</span> Vb: sig .. end</pre><br>\n<h2 id="2_Classlanguage">Class language</h2><br>\n\n<pre><span class="keyword">module</span> Cty: sig .. end</pre><div class="info">\nClass type expressions\n</div>\n\n<pre><span class="keyword">module</span> Ctf: sig .. end</pre><div class="info">\nClass type fields\n</div>\n\n<pre><span class="keyword">module</span> Cl: sig .. end</pre><div class="info">\nClass expressions\n</div>\n\n<pre><span class="keyword">module</span> Cf: sig .. end</pre><div class="info">\nClass fields\n</div>\n\n<pre><span class="keyword">module</span> Ci: sig .. end</pre><div class="info">\nClasses\n</div>\n\n<pre><span class="keyword">module</span> Csig: sig .. end</pre><div class="info">\nClass signatures\n</div>\n\n<pre><span class="keyword">module</span> Cstr: sig .. end</pre><div class="info">\nClass structures\n</div>\n</div>'}}},pathContext:{relativePath:"api/Ast_helper.html"}}}});
//# sourceMappingURL=path---api-ast-helper-html-08e3d92d0a0548dd12a8.js.map