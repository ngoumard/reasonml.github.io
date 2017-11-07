webpackJsonp([293],{"./node_modules/json-loader/index.js!./.cache/json/api-camlinternal-oo-html.json":function(n,t){n.exports={data:{file:{relativePath:"api/CamlinternalOO.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="CamlinternalMod.html" title="CamlinternalMod">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Char.html" title="Char">Next</a>\n</div>\n<h1>Module <a href="type_CamlinternalOO.html">CamlinternalOO</a></h1>\n\n<pre><span class="keyword">module</span> CamlinternalOO: sig .. end</pre><div class="info module top">\nRun-time support for objects and classes.\n    All functions in this module are for system use only, not for the\n    casual user.<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Classes">Classes</h6><br>\n\n<pre id="TYPEtag"><span class="keyword">type</span> tag;\n</pre>\n\n\n<pre id="TYPElabel"><span class="keyword">type</span> label;\n</pre>\n\n\n<pre id="TYPEtable"><span class="keyword">type</span> table;\n</pre>\n\n\n<pre id="TYPEmeth"><span class="keyword">type</span> meth;\n</pre>\n\n\n<pre id="TYPEt"><span class="keyword">type</span> t;\n</pre>\n\n\n<pre id="TYPEobj"><span class="keyword">type</span> obj;\n</pre>\n\n\n<pre id="TYPEclosure"><span class="keyword">type</span> closure;\n</pre>\n\n\n<pre id="VALpublic_method_label"><span class="keyword">let</span> public_method_label: string =&gt; tag;\n</pre>\n<pre id="VALnew_method"><span class="keyword">let</span> new_method: table =&gt; label;\n</pre>\n<pre id="VALnew_variable"><span class="keyword">let</span> new_variable: (table, string) =&gt; int;\n</pre>\n<pre id="VALnew_methods_variables"><span class="keyword">let</span> new_methods_variables: (table, array(string), array(string)) =&gt; array(label);\n</pre>\n<pre id="VALget_variable"><span class="keyword">let</span> get_variable: (table, string) =&gt; int;\n</pre>\n<pre id="VALget_variables"><span class="keyword">let</span> get_variables: (table, array(string)) =&gt; array(int);\n</pre>\n<pre id="VALget_method_label"><span class="keyword">let</span> get_method_label: (table, string) =&gt; label;\n</pre>\n<pre id="VALget_method_labels"><span class="keyword">let</span> get_method_labels: (table, array(string)) =&gt; array(label);\n</pre>\n<pre id="VALget_method"><span class="keyword">let</span> get_method: (table, label) =&gt; meth;\n</pre>\n<pre id="VALset_method"><span class="keyword">let</span> set_method: (table, label, meth) =&gt; unit;\n</pre>\n<pre id="VALset_methods"><span class="keyword">let</span> set_methods: (table, array(label)) =&gt; unit;\n</pre>\n<pre id="VALnarrow"><span class="keyword">let</span> narrow: (table, array(string), array(string), array(string)) =&gt; unit;\n</pre>\n<pre id="VALwiden"><span class="keyword">let</span> widen: table =&gt; unit;\n</pre>\n<pre id="VALadd_initializer"><span class="keyword">let</span> add_initializer: (table, obj =&gt; unit) =&gt; unit;\n</pre>\n<pre id="VALdummy_table"><span class="keyword">let</span> dummy_table: table;\n</pre>\n<pre id="VALcreate_table"><span class="keyword">let</span> create_table: array(string) =&gt; table;\n</pre>\n<pre id="VALinit_class"><span class="keyword">let</span> init_class: table =&gt; unit;\n</pre>\n<pre id="VALinherits"><span class="keyword">let</span> inherits:\n  (table, array(string), array(string), array(string), (t, (table, obj) =&gt; Obj.t, t, obj), bool) =&gt;\n  array(Obj.t);\n</pre>\n<pre id="VALmake_class"><span class="keyword">let</span> make_class:\n  (array(string), (table, Obj.t) =&gt; t) =&gt; (t, (table, Obj.t) =&gt; t, Obj.t =&gt; t, Obj.t);\n</pre>\n<pre id="TYPEinit_table"><span class="keyword">type</span> init_table;\n</pre>\n\n\n<pre id="VALmake_class_store"><span class="keyword">let</span> make_class_store: (array(string), table =&gt; t, init_table) =&gt; unit;\n</pre>\n<pre id="VALdummy_class"><span class="keyword">let</span> dummy_class: ((string, int, int)) =&gt; (t, (table, Obj.t) =&gt; t, Obj.t =&gt; t, Obj.t);\n</pre><br>\n<h6 id="6_Objects">Objects</h6><br>\n\n<pre id="VALcopy"><span class="keyword">let</span> copy: ({..} as &apos;a) =&gt; &apos;a;\n</pre>\n<pre id="VALcreate_object"><span class="keyword">let</span> create_object: table =&gt; obj;\n</pre>\n<pre id="VALcreate_object_opt"><span class="keyword">let</span> create_object_opt: (obj, table) =&gt; obj;\n</pre>\n<pre id="VALrun_initializers"><span class="keyword">let</span> run_initializers: (obj, table) =&gt; unit;\n</pre>\n<pre id="VALrun_initializers_opt"><span class="keyword">let</span> run_initializers_opt: (obj, obj, table) =&gt; obj;\n</pre>\n<pre id="VALcreate_object_and_run_initializers"><span class="keyword">let</span> create_object_and_run_initializers: (obj, table) =&gt; obj;\n</pre>\n<pre id="VALsend"><span class="keyword">let</span> send: (obj, tag) =&gt; t;\n</pre>\n<pre id="VALsendcache"><span class="keyword">let</span> sendcache: (obj, tag, t, int) =&gt; t;\n</pre>\n<pre id="VALsendself"><span class="keyword">let</span> sendself: (obj, label) =&gt; t;\n</pre>\n<pre id="VALget_public_method"><span class="keyword">let</span> get_public_method: (obj, tag) =&gt; closure;\n</pre><br>\n<h6 id="6_Tablecache">Table cache</h6><br>\n\n<pre id="TYPEtables"><span class="keyword">type</span> tables;\n</pre>\n\n\n<pre id="VALlookup_tables"><span class="keyword">let</span> lookup_tables: (tables, array(closure)) =&gt; tables;\n</pre><br>\n<h6 id="6_Builtinstoreducecodesize">Builtins to reduce code size</h6><br>\n\n<pre><span class="keyword">type</span> impl = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>GetMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SetVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppConstMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppVarConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppEnvConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>AppMethConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>MethAppMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendConst</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendVar</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendEnv</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>SendMeth</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Closure of closure</code></td>\n\n</tr></tbody></table>\n\n\n<br>\n<h6 id="6_Parameters">Parameters</h6><br>\n\n<pre><span class="keyword">type</span> params = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;compact_table&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;copy_parent&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;clean_when_copying&#xA0;: bool;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;retry_count&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;bucket_small_size&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre id="VALparams"><span class="keyword">let</span> params: params;\n</pre><br>\n<h6 id="6_Statistics">Statistics</h6><br>\n\n<pre><span class="keyword">type</span> stats = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>classes&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>methods&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>inst_vars&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre id="VALstats"><span class="keyword">let</span> stats: unit =&gt; stats;\n</pre></div>'}}},pathContext:{relativePath:"api/CamlinternalOO.html"}}}});
//# sourceMappingURL=path---api-camlinternal-oo-html-eb2d914fad733720b734.js.map